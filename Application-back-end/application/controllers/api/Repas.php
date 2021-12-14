<?php
 require APPPATH . '/libraries/REST_Controller.php';
 use Restserver\Libraries\REST_Controller;

class repas extends REST_Controller {

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_get($id = 0)
    {
        if(!empty($id)){
            $data = $this->db->get_where("repas", ['repas_id' => $id])->row_array();
            }else{
            $data = $this->db->get("repas")->result();
        }

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
        $this->db->insert('repas',$input);

        $this->response(['repas created successfully.'], REST_Controller::HTTP_OK);
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_put($idrepas)
    {
        $input = $this->put();
        $this->db->update('repas', $input, array('idrepas'=>$idrepas));

        $this->response(['repas updated successfully.'], REST_Controller::HTTP_OK);
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_delete($idrepas)
    {
        $this->db->delete('repas', array('idrepas'=>$idrepas));

        $this->response(['repas deleted successfully.'], REST_Controller::HTTP_OK);
    }

}