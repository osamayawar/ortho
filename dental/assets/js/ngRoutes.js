'use strict'

var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

myApp.run(function($rootScope, $http, $location, $routeParams){
	$rootScope.authenticated = false;
	$rootScope.$on("$routeChangeStart", function(e, current, previous){
		$http.get('api/user/authenticated')
			.then(function(res){
				if(res.data.authenticated == true && angular.isDefined(res.data.authenticated)) {
					$rootScope.userid = res.data.user_id;
					$rootScope.authenticated = res.data.authenticated;
                	$rootScope.clinicname = res.data.clinic_name;
                	$rootScope.contact = res.data.contact;
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
					$rootScope.authenticated = false;
					if (angular.isObject(current.$$route)) {
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
			controller: 'MainController',
			resolve: {
            	auth: function($rootScope, $location){
            		if(!$rootScope.authenticated || !angular.isDefined($rootScope.authenticated)) {
                		$rootScope.authenticated = false;
                		$location.path('/login');
                	} else {
                		$rootScope.authenticated = true;
                	}
                }
        	}
		})
		
		.when('/login', {
			templateUrl : 'dental/partials/login.html',
			controller : 'LoginController',
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







