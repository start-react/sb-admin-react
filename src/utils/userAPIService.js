var axios = require('axios');
var AppActions = require('../actions/app-actions');
var Base64 = require('base-64');
var UserAPIService = {

	login: function(userID, password){

		var encodedValue = Base64.encode(userID + ':' + password);
		axios({
			method: 'get',
			url: 'https://bluescreenapi.lancasterfarms.com/login',
			headers: {'Authorization': 'Basic ' + encodedValue},
		})
		.then(function(res){
			console.log('RESPONSE ', res);
			if(res.status == 200)
				AppActions.loggedIn(res.data);
		});
	}	

};

export default UserAPIService;

// {'Authorization': 'Basic ' + encodedValue},c2FodXNvZnQ6YWdpbGVkZXZlbG9wbWVudA==