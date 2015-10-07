var axios = require('axios');
var AuthActions = require('../actions/AuthActions');
var Base64 = require('base-64');

export default class AuthAPIService {

	static login(userID, password){

		var encodedValue = Base64.encode(userID + ':' + password);

		axios({
			method: 'get',
			url: 'https://bluescreenapi.lancasterfarms.com/login',
			headers: {'Authorization': 'Basic ' + encodedValue},
		})
		.then(function(res){

			if(res.status == 200)
				AuthActions.loggedIn(res.data);

		})
		.catch(function(res){
			AuthActions.loginError(res.data);
		});

	}	

};
