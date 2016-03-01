<?php 

class user_model extends CI_Model {
	
	public function getUser($email, $password) {
		$query = $this->db->get_where('user', array('email'=>$email, "password"=>md5($password)));
		if(empty($query->result())){
			return array(
				"error_code" => 0,
				"message" => "You are not a registered user"
			);
		}
		else {
			$row = $query->row();
			$this->session->set_userdata(array(
				'id' => md5(uniqid(rand(), true)),
				'clinic' => $row->clinic_name,
				'email' => $row->email,
			));
			return array(
				"error_code" => 1,
			);
		}
	}
}

?>