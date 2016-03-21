myApp.controller('PatientController', function($scope, $rootScope, $http, $timeout) {
	
    $scope.init = function() {
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
        $scope.patient.reasonOfVisit = "";
        
        $scope.today = function() {
            $scope.patient.dob = new Date();
        };
        $scope.today();
        
        $scope.open = function() {
            $scope.popup.opened = true;
        };

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        function disabled(data) {
            var date = data.date,
            mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.altInputFormats = ['M!/d!/yyyy'];
        $scope.popup = {
            opened: false,
        };
    }	
    $scope.init();

    $scope.addNewPatient = function(userInfo) {
        $scope.patientForm.submitted = true;
        if ($scope.patientForm.$valid) {
            $http.post('api/patient/addNew', userInfo)
                .then(function(res){
                     $scope.alerts = "Patient Successfully Added";
                });
        }
    }
});

