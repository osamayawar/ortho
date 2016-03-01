'use strict'

var myApp = angular.module('myApp', ['ngRoute']);
myApp.run(function($rootScope, $location, $routeParams){
	$rootScope.init = "osama";
});
myApp.config(function($routeProvider, $locationProvider){
	$routeProvider
		
		.when('/', {
			templateUrl: 'dental/partials/home.html',
			controller: 'MainController'
		})
		
		.when('/login', {
			templateUrl : 'dental/partials/login.html',
			controller : 'LoginController'
		})

		.when('/patient/new', {
			templateUrl : 'dental/partials/addNewPatient.html',
			controller : 'PatientController'
		})

		.when('/calendar', {
			templateUrl : 'dental/partials/calendar.html',
			controller : 'CalendarController'
		})

		.otherwise({
			redirectTo : '/login'
		});
});



