var ResourceApiUtils = require('resource-api-utils/src/ResourceApiServiceFactory');

var utilsAPI = {

	test: function(){
		console.log("utils test", ResourceApiUtils.create);
		var Api = ResourceApiUtils.create('https://bluescreenapi.lancasterfarms.com/hello/world');
		console.log();
		Api.get(0)
			.then(function(response){
				console.log("success", response);
			},
			function(error){
				console.log("error", error);
			});	
	}
	
	
}


export default utilsAPI;