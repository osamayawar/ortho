myApp.controller('MainController', function($scope, $http, $filter, $q) {

	
	$scope.tableheaders = ['ID', 'Clinic Name', 'Email', 'Contact'];
	$scope.reverse = true;

	/** Get list and count of all the patients */
	var totalPatientsCount = 0;
	var promise = $http.get('api/patient/getAllPatients');
	promise.then(
		function(res) {
			$scope.patientsList = res.data;
			totalPatientsCount = res.data.length;
		});
	promise.then(
		function(){
			$scope.initPagination(totalPatientsCount);
		});

	/** Table Sorter **/
	var orderBy = $filter('orderBy');
	
	
  	$scope.order = function(predicate) {
  		$scope.predicate = predicate;
  		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
   	 	$scope.patientsList = orderBy($scope.patientsList, $scope.predicate, $scope.reverse);
  	};
  	
  	$scope.order('id', true);
  	/** Table Sorter Ends Here**/
  	

  	/** Pagination */
  	$scope.initPagination = function(patientCount) {
  		$scope.totalItems = patientCount;
  		$scope.currentPage = 1;
  		$scope.maxSize = 5;
	}

	/** Pagination Ends Here */
});