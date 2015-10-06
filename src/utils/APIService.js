var axios = require('axios');
var AppActions = require('../actions/app-actions');

/*function test(){
	console.log("inside APIService test");
	return axios.get('https://bluescreenapi.lancasterfarms.com/hello/@world');
}

function getAuthToken(userDetails){
	console.log("inside APIService getAuthToken", userDetails);
	return axios.get('https://bluescreenapi.lancasterfarms.com/hello/@world');
}*/


// var APIService = {
// 	getTest: function(){
// 		return test()
// 			.then(function(response){
// 				console.log("response &&&", response);
// 				return response;
// 			});
// 	}
	
// };
// var promiseObj = test();
				
// var promiseObj = getAuthToken(userDetails);
// promiseObj.then(function(data){
// 	console.log("axios data", data);
// 	return data;
// });

/*var APIService = test();
APIService.then(function(response){
				console.log("APIService", response);
				AppActions.loggedIn();
			});
*/
// export default promiseObj;


var APIService = {

	test: function(){
		axios.get('https://bluescreenapi.lancasterfarms.com/hello/@world').then(function(res){
			console.log('RESPONSE ', res);
		});
	}	

};

export default APIService;