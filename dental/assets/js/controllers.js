myApp.controller('MainController', function($scope) {
});

myApp.controller('PatientController', function($scope, $rootScope) {
	Date.now = new Date().getTime();
	$scope.patient = {};
	$scope.patient.uniqueid = Math.floor(Date.now/1000);

	$scope.patient.selectedInitial = 'Mr';
	$scope.patient.initials = ['Mr', 'Mrs', 'Dr', 'Dr [Mrs]', 'Prof', 'Mister', 'Miss', 'Ms'];

	$scope.patient.gender = 'Male';
	$scope.patient.genders = ['Male', 'Female'];


	$scope.patient.maritalstatus = 'Single';
	$scope.patient.maritalstatuses = ['Single', 'Married', 'Separated', 'Divorced', 'Widow'];

	$scope.patient.occupation = 'Business';
	$scope.patient.occupations = ['Business', 'Doctor', 'Landlord', 'Professional', 'Retired', 'Housewife', 'Service', 'Student'];	
	console.log($scope.patient);
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