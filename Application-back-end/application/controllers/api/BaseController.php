<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    require APPPATH . '/libraries/REST_Controller.php';
    use Restserver\Libraries\REST_Controller;
    session_start();

    class BaseController extends REST_Controller {

        /**
         * Get All Data from this method.
         *
         * @return Response
         */
        public function __construct() {
            parent::__construct();
            $this->load->database();
        }

        /**
         * Index Page for this controller.
         *
         * Maps to the following URL
         * 		http://example.com/index.php/welcome
         *	- or -
        * 		http://example.com/index.php/welcome/index
        *	- or -
        * Since this controller is set as the default controller in
        * config/routes.php, it's displayed at http://example.com/
        *
        * So any other public methods not prefixed with an underscore will
        * map to /index.php/welcome/<method_name>
        * @see https://codeigniter.com/user_guide/general/urls.html
        */
        public function redirect404error()
        {
            $this->load->view('404error');
        }	
    }
