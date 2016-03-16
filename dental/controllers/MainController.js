myApp.controller('MainController', function($scope, $http, $filter) {

	$http.post('api/patient/getAllPatients')
	.success(function(res){
		$scope.patientsList = res;
	});

	$scope.tableheaders = ['ID', 'Clinic Name', 'Email', 'Contact'];

	/** Table Sorter **/
	var orderBy = $filter('orderBy');
	
	$scope.reverse = true;
  
  	$scope.order = function(predicate) {
  		$scope.predicate = predicate;
  		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
   	 	$scope.patientsList = orderBy($scope.patientsList, $scope.predicate, $scope.reverse);
  	};
  	
  	$scope.order('id', true);
  	/** Table Sorter Ends Here**/
});