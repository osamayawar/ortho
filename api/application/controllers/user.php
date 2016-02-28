<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

class User extends MY_Controller
{

	// public function login() {
 //        $data = [];
 //    	if(empty($this->logged_in())) {
	//     	$this->template
	//             ->setViewPath('/user/login')
	//             ->setViewData($data)
	// 	  		->render();
	//   	}
	//   	else{
	//   		redirect('/');
	//   	}
 //    }

    public function getFormData(){
        $user = json_decode(file_get_contents("php://input"));
        
        $email = $user->email;
    	$password = $user->password;

	    $validationResponse = $this->validateForm($email, $password);
	    if($validationResponse['error_code'] == 1) {
	    	$this->load->model('user_model', 'usermodel');
    		$databaseValidationResponse = $this->usermodel->getUser($email, $password);
    		if($databaseValidationResponse['error_code'] == 1) {
    			$databaseValidationResponse['session'] = $this->session->userdata;
    			echo json_encode($databaseValidationResponse);
    		}
    		else {
    			echo json_encode($databaseValidationResponse);
	    	}
	    }
	    else {
	    	echo json_encode($validationResponse);
	    }
	}

    private function validateForm($email, $password) {
    	if(empty(trim($email)) || empty(trim($password)))
    		return array(
    			"error_code" => 0, 
    			"message" => "Username or password cannot be empty"
    		);
    	else {
    		return array("error_code" => 1);
    	}
    } 

    // public function logout() {
    // 	$this->session->sess_destroy();
    // 	redirect('/user/login');
    // }  
}
?>