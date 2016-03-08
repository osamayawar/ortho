myApp.controller('MainController', function($scope) {
});

myApp.controller('PatientController', function($scope, $rootScope) {
	Date.now = new Date().getTime();
	$scope.patient = {};
	$scope.patient.uniqueid = Math.floor(Date.now/1000);
	$scope.patient.initials = "Mr";
	$scope.patient.maritalstatus = "Single";
	// $scope.$digest();
});

myApp.controller('ContactController', function($scope) {
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
});