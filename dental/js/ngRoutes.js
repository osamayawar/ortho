'use strict'

var myApp = angular.module('myApp', ['ngRoute']);
myApp.run(function($rootScope, $location, $routeParams){
});
myApp.config(function($routeProvider, $locationProvider){
	$routeProvider
		
		.when('/', {
			templateUrl: 'dental/partials/home.html',
			controller: 'mainController'
		})
		
		.when('/login', {
			templateUrl : 'dental/partials/login.html',
			controller : 'loginController'
		})

		.when('/patient/new', {
			templateUrl : 'dental/partials/addNewPatient.html',
			controller : 'patientController'
		})

		.when('/contact', {
			templateUrl : 'dental/partials/contact.html',
			controller : 'contactController'
		})

		.when('/calendar', {
			templateUrl : 'dental/partials/calendar.html',
			controller : 'calendarController'
		})
});



myApp.controller('mainController', function($scope) {
	$scope.message = 'This is the main page';
});

myApp.controller('patientController', function($scope) {
	$scope.message = "This is about page";
});

myApp.controller('contactController', function($scope) {
	$scope.message = "This is contact page";
});

myApp.controller('loginController', function($scope, $http, $location) {
	$scope.update = function(user) {
		$http.post('api/user/getFormData', user)
		.success(function(response, status){
			if(response.error_code == 0) {
				$scope.alerts = response.message;
			}
			else{
					$location.path('/');
				}
    	});
    };
});

myApp.controller('calendarController', function($scope) {
	$scope.message = "This is calendar page";
});