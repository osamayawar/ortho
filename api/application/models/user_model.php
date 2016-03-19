<?php 

class user_model extends CI_Model {
	
	public function getUser($email, $password) {
		$query = $this->db->select('*')
					->where('email', $email)
					->where('password', md5($password))
					->get('user');
		
		if(empty($query->result())){
			return array(
				"error_code" => 0,
				"message" => "You are not a registered user"
			);
		}
		else {
			$row = $query->row();
			$this->session->set_userdata(array(
				'user_id' => $row->id,
				'clinic' => $row->clinic_name,
				'email' => $row->email,
				'contact' => $row->contact,
				'authenticated' => true
			));
			return array(
				"error_code" => 1,
			);
		}
	}
}

?>