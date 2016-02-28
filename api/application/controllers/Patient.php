<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

class Patient extends MY_Controller
{
	public function __construct() {
		parent::__construct();
		if(empty($this->logged_in())) {
			redirect('/user/login');
		}
	}

	public function add() {
		$data = [];
		$this->template
	        ->setViewPath('patient/add')
	        ->setViewData($data)
	        ->render();
	}
}
?>