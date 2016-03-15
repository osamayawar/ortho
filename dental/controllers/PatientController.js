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

});