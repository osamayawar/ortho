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
		$query = $this->db->get('user');
		echo json_encode($query);
	}
}
?>