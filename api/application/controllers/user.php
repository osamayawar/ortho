<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

class User extends MY_Controller
{

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

    public function validateForm($email, $password) {
        if(empty(trim($email)) || empty(trim($password))) {
    		return array(
    			"error_code" => 0, 
    			"message" => "Username or password cannot be empty"
    		);
        }
    	else {
    		return array("error_code" => 1);
    	}
    } 

    public function authenticated() {
        $sessionData = array(
            "user_id" => "",
            "clinic_name" => "",
            "email" => "",
            "contact" => "",
            "authenticated" => ""
        );

        if(isset($_SESSION['user_id']) && isset($_SESSION['clinic']) && isset($_SESSION['email']) && isset($_SESSION['authenticated'])) {
            
            $sessionData = array(
                "user_id" => $_SESSION['user_id'],
                "clinic_name" => $_SESSION['clinic'],
                "email" => $_SESSION['email'],
                "contact" => $_SESSION['contact'],
                "authenticated" => $_SESSION['authenticated']
            );
            echo json_encode($sessionData);
        }
    }

    public function logout()
    {
        session_destroy();
        
        unset($_SESSION['id']);
        unset($_SESSION['clinic']);
        unset($_SESSION['email']);
        unset($_SESSION['authenticated']);
        
        // return
        $response = array("error_code" => 1);
        echo json_encode($response);
    }

}
?>
