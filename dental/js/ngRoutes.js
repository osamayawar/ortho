'use strict'

var myApp = angular.module('myApp', ['ngRoute']);
myApp.run(function($rootScope, $http, $location, $routeParams){
	$rootScope.$on("$routeChangeStart", function(e, current, previous){
		$http.get('api/user/authenticated')
			.then(function(res){
				if(res.data.authenticated == true) {
					$rootScope.authenticated = res.data.authenticated;
                	$rootScope.clinicname = res.data.clinic_name;
                	$rootScope.email = res.data.email;

                	if(angular.isDefined(previous)) {
	                	if (angular.isObject(current.$$route) && angular.isObject(previous.$$route)) {
	                		if (current.$$route.originalPath === '/login') {
	                			$location.path(previous.$$route.originalPath);
	                		}
	                	}
                	}
				}
				else {
					if (angular.isObject(current.$$route)) {
						console.log(current.$$route);
						if (current.$$route.originalPath !== '/login') {
							$location.path('/login');
						}
					}
				}
			});
	});
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



