var React = require('react');

var encode = {

	base64Str: '',

	base64Count: 0,

	END_OF_INPUT: -1,

	setBase64Str: function(str){
	    this.base64Str = str;
	    this.base64Count = 0;
	},

	readBase64: function(){    
	    if (!this.base64Str) return this.END_OF_INPUT;
	    if (this.base64Count >= this.base64Str.length) return this.END_OF_INPUT;
	    var c = this.base64Str.charCodeAt(this.base64Count) & 0xff;
	    this.base64Count++;
	    return c;
	},

	base64Chars: [
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z','a','b','c','d','e','f',
    'g','h','i','j','k','l','m','n',
    'o','p','q','r','s','t','u','v',
    'w','x','y','z','0','1','2','3',
    '4','5','6','7','8','9','+','/'
	],

	encodeBase64: function(str){
	    this.setBase64Str(str);
	    var result = '';
	    var inBuffer = new Array(3);
	    var lineCount = 0;
	    var done = false;
	    while (!done && (inBuffer[0] = this.readBase64()) != this.END_OF_INPUT){
	        inBuffer[1] = this.readBase64();
	        inBuffer[2] = this.readBase64();
	        result += (this.base64Chars[ inBuffer[0] >> 2 ]);
	        if (inBuffer[1] != this.END_OF_INPUT){
	            result += (this.base64Chars [(( inBuffer[0] << 4 ) & 0x30) | (inBuffer[1] >> 4) ]);
	            if (inBuffer[2] != this.END_OF_INPUT){
	                result += (this.base64Chars [((inBuffer[1] << 2) & 0x3c) | (inBuffer[2] >> 6) ]);
	                result += (this.base64Chars [inBuffer[2] & 0x3F]);
	            } else {
	                result += (this.base64Chars [((inBuffer[1] << 2) & 0x3c)]);
	                result += ('=');
	                done = true;
	            }
	        } else {
	            result += (this.base64Chars [(( inBuffer[0] << 4 ) & 0x30)]);
	            result += ('=');
	            result += ('=');
	            done = true;
	        }
	        lineCount += 4;
	        if (lineCount >= 76){
	            result += ('\n');
	            lineCount = 0;
	        }
	    }
	    return result;
	}
};

export default encode;