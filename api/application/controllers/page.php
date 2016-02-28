<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

class Page extends MY_Controller
{
	public function __construct() {
		parent::__construct();
		if(empty($this->logged_in())) {
			redirect('/user/login');
		}
	}
	
	public function index() {
		$data = [];
		$this->template
	        ->setViewPath('page/index')
	        ->setViewData($data)
	  		->render();
	}
}