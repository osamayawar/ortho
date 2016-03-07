myApp.controller('MainController', function($scope) {
	$scope.message = 'This is the main page';
});

myApp.controller('PatientController', function($scope, $rootScope) {
	$scope.message = "This is about page";
});

myApp.controller('ContactController', function($scope) {
	$scope.message = "This is contact page";
});

myApp.controller('LoginController', function($scope, $rootScope, $http, $location) {
	$scope.submitLoginForm = function(user) {
		$http.post('api/user/getFormData', user)
		.success(function(response, status){
			if(response.error_code == 0) {
				$scope.alerts = response.message;
			}
			else
			{
				$location.path('/');
			}

    	});
    };

    $scope.logout = function() {
    	$http.get('api/user/logout')
    		.then(function(res){
    			if(res.data.error_code == 1) {
    				$location.path('/login');
    			}
    		});
    };

});

myApp.controller('CalendarController', function($scope) {
	$scope.message = "This is calendar page";
});