myApp.controller('MainController', function($scope) {
	$scope.message = 'This is the main page';
});

myApp.controller('PatientController', function($scope) {
	$scope.message = "This is about page";
});

myApp.controller('ContactController', function($scope) {
	$scope.message = "This is contact page";
});

myApp.controller('LoginController', function($scope, $http, $location) {
	$scope.validate = function(user) {
		$http.post('api/user/getFormData', user)
		.success(function(response, status){
			console.log(response);
			if(response.error_code == 0) {
				$scope.alerts = response.message;
			}
			else{
					$location.path('/');
				}
    	});
    };
});

myApp.controller('CalendarController', function($scope) {
	$scope.message = "This is calendar page";
});