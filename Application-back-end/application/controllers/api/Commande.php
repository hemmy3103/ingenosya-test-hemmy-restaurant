<?php
 require APPPATH . '/libraries/REST_Controller.php';
 use Restserver\Libraries\REST_Controller;

class Commande extends REST_Controller {

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function __construct() {
        parent::__construct();
        $this->load->model('etudiant_model');
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_get($dateCommande = 0)
    {
       if(!empty($code)){
            $data = $this->db->get_where("vDetailCommande", ['dateCommande' => $dateCommande])->row_array();
        }else{
            $this->db->select('*');
            $this->db->from("vDetailCommande where dateCommande = current_date()");
            $data=$this->db->get()->result_array();
        }
        $this->response($data, REST_Controller::HTTP_OK);
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function platCantine_get()
    {
        $this->db->select('*');
        $this->db->from("vCommandeCantine");
        $data=$this->db->get()->result();
        $this->response($data, REST_Controller::HTTP_OK);
    }


    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_post()
    {
        $input = $this->input->post();
        if(isset($_SESSION["token"])){
            $token = $_SESSION["token"];
            $numETU = $this->etudiant_model->getETU($token);
            $input['numETU'] = $numETU;
            $this->db->insert('Commande',$input);
            $this->response(['Commande created successfully.'], REST_Controller::HTTP_OK);
        }
        else{
            $this->response(['Vous ne pouvez pas commander car vous n\'etes pas connecte'], REST_Controller::HTTP_OK);
        }
        
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_put()
    {
        $input = $this->put();
        if(isset($_SESSION["token"])){
            $token = $_SESSION["token"];
            $numETU = $this->etudiant_model->getETU($token);
            $this->db->update('Commande', $input, array('idCommande'=>$input['idCommande'], 'numEtu'=>$numETU));
            $this->response(['Commande updated successfully.'], REST_Controller::HTTP_OK);
        }
        else{
            $this->response(['Vous ne pouvez pas commander car vous n\'etes pas connecte'], REST_Controller::HTTP_OK);
        }
        
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_delete($idCommande)
    {
        $this->db->delete('Commande', array('idCommande'=>$idCommande));

        $this->response(['Commande deleted successfully.'], REST_Controller::HTTP_OK);
    }

}