myApp.controller('MainController', function($scope, $http) {
	$http.post('api/patient/getAllPatients')
	.success(function(res){
		console.log(res);
	});
});