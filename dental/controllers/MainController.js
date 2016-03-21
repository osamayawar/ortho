myApp.controller('MainController', function($scope, $http, $filter, $q, $rootScope) {

	$scope.tableheaders = ['ID', 'Clinic Name', 'Email', 'Contact'];
	$scope.reverse = true;

	/** Get list and count of all the patients */
	var totalPatientsCount = 0;
	var promise = $http.get('api/patient/getAllPatients');
	promise.then(
		function(res) {
      console.log(res);
			$scope.patientsList = res.data;
			totalPatientsCount = res.data.length;
		});
	promise.then(
		function(){
			$scope.initPagination(totalPatientsCount);
		});

  	$scope.initPagination = function(patientCount) {
  		$scope.itemsPerPage = 15
  		$scope.currentPage = 1;

  		
  			$scope.totalItems = $scope.patientsList.length;
  			$scope.$watch('currentPage + itemsPerPage', function() {
  				var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
  				end = begin + $scope.itemsPerPage;
				$scope.filteredPatientsList = $scope.patientsList.slice(begin, end);
    			return $scope.filteredPatientsList;
    		});
  	}
	
	var orderBy = $filter('orderBy');	
  	$scope.order = function(predicate) {
  		$scope.predicate = predicate;
  		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
   	 	$scope.filteredPatientsList = orderBy($scope.filteredPatientsList, $scope.predicate, $scope.reverse);
  	};
  	$scope.order('id', true);
  	



});