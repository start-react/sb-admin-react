var axios = require('axios');

function test(){
	console.log("inside APIService test");
	return axios.get('https://bluescreenapi.lancasterfarms.com/hello/@world');
}

function getAuthToken(userDetails){
	console.log("inside APIService getAuthToken", userDetails);
	return axios.get('https://bluescreenapi.lancasterfarms.com/hello/@world');
}

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

var APIService = {
	getTest: function(){
		var promiseObj = test();
		promiseObj.then(function(data){
			console.log("axios data", data);
			return data;
		});
		return promiseObj;
		// return axios.get('https://bluescreenapi.lancasterfarms.com/hello/@world')
		// 	.then(function(response){
		// 		console.log("APIService", response);
		// 		return response;
		// 	});

	}
}
// export default promiseObj;
export default APIService;