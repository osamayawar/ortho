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