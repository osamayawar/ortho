myApp.controller('MainController', function($scope) {
	$scope.message = 'This is the main page';
});

myApp.controller('PatientController', function($scope, $rootScope) {
	console.log($rootScope);
	$scope.message = "This is about page";
});

myApp.controller('ContactController', function($scope) {
	$scope.message = "This is contact page";
});

myApp.controller('LoginController', function($scope, $rootScope, $http, $location) {
	$scope.validate = function(user) {
		$http.post('api/user/getFormData', user)
		.success(function(response, status){
			if(response.error_code == 0) {
				$scope.alerts = response.message;
			}
			else
			{
				if(angular.isDefined(response.session.id)) {
					$rootScope.session = true;
					$location.path('/');
				}
				else {
					delete $rootScope.session;
				}

			}

    	});
    	// console.log($rootScope);

    };

});

myApp.controller('CalendarController', function($scope) {
	$scope.message = "This is calendar page";
});