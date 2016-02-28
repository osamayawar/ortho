<?php
class MY_Controller extends CI_Controller {
	public function __construct() {
		parent::__construct();
    }

    public function logged_in() {
    	// print_r($this->session);
    	if(isset($this->session->userdata['is_session'])) {
    		return $this->session->userdata['is_session'];
    	}
    	// else {
    	// 	return FALSE;
    	// }
    }
}
?>