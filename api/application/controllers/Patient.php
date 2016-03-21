<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

class Patient extends MY_Controller
{
	public function add() {
		$data = [];
		$this->template
	        ->setViewPath('patient/add')
	        ->setViewData($data)
	        ->render();
	}

	public function getAllPatients() {
		$query = $this->db 
					->select(array('registration_number', 'first_name', 'last_name', 'gender', 'cell'))
					->get('patients');
		echo json_encode($query->result_array());
	}

	public function addNew() {
		$patient = json_decode(file_get_contents("php://input"));
		$validationResponse = $this->validateIfEmpty($patient);
		if($validationResponse['error_code'] == 0) {
			echo json_encode($validationResponse);
		}
		else {
			$patientsData = array(
				'registrationNumber' => $patient->uniqueid,
				'initial' => $patient->selectedInitial,
				'firstname' => $patient->firstname,
				'lastname' => $patient->lastname,
				'gender' => $patient->gender,
				'maritalstatus' => $patient->maritalstatus,
				'occupation' => $patient->occupation,
				'dob' => $patient->dob,
				'cell' => $patient->cell,
				'phone' => $patient->phone,
				'email' => $patient->email,
				'address' => $patient->address,
				'reasonOfVisit' => $patient->reasonOfVisit
				);
			
			$insertIntoDB = $this->setPatient($patientsData);
			if($insertIntoDB['error_code'] == 1) {
				$response = array(
					'error_code' => 1,
					'message' => 'Patient successfull added'
					);
				echo json_encode($response);
			}
		}
	}

	public function validateIfEmpty($patientsData) {
		foreach($patientsData as $key=>$patientData) {
			
			switch($key) {
				case 'firstname':
					if(empty($patientData)){
						return array(
							'error_code' => 0,
							'message' => "Enter patient`s first name."
							);
					}
					break;
				
				case 'lastname':
					if(empty($patientData)){
						return array(
							'error_code' => 0,
							'message' => "Enter patient`s last name."
							);
					}
					break;

				case 'cell':
					if(empty($patientData)){
						return array(
							'error_code' => 0,
							'message' => "Enter patient`s cell number."
							);
					}
					break;

				case 'phone':
					if(empty($patientData)){
						return array(
							'error_code' => 0,
							'message' => "Enter patient`s phone number."
							);
					}
					break;

				case 'address': 
					if(empty($patientData)){
						return array(
							'error_code' => 0,
							'message' => "Enter patient`s address"
							);
					}	
					break;

				case 'reasonOfVisit':
					if(empty($patientData)){
						return array(
							'error_code' => 0,
							'message' => "Enter patient`s reason of visit"
							);
					}	
					break;
			}
		}

		return array('error_code' => 1);
		// foreach($patientsData as $key=>$patientData) {
		// 	echo $key . $patientData[$key] . "<br>";
		// 	// exit();
		// }
	}

	public function setPatient($patientsData) {
		$this->load->model('PatientModel', 'patient_model');
		$insertData = $this->patient_model->setPatient($patientsData);
		if($insertData == 1) {
			return array('error_code' => 1);
		}


	}
}
?>