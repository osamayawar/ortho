<?php 
class PatientModel extends CI_Model {
	
	public function setPatient($data) {
		// print_r($data);
		$patientRecord = array(
			'registration_number' => $data['registrationNumber'],
			'initials' => $data['initial'],
			'first_name' => $data['firstname'],
			'last_name' => $data['lastname'],
			'gender' => $data['gender'],
			'dob' => $data['dob'],
			'marital_status' => $data['maritalstatus'],
			'cell' => $data['cell'],
			'phone' => $data['phone'],
			'email' => $data['occupation'],
			'address' => $data['address'],
			'occupation' => $data['occupation'],
			'reason_of_visit' => $data['reasonOfVisit']
			);

		$query = $this->db->insert('patients', $patientRecord);
		return 1;
	}
}

?>