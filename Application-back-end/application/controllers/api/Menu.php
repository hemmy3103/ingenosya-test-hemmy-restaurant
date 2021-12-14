<?php
 require APPPATH . '/libraries/REST_Controller.php';
 use Restserver\Libraries\REST_Controller;

class Menu extends REST_Controller {

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
            $data = $this->db->get_where("menu", ['menu_id' => $id])->row_array();
            }else{
            $data = $this->db->get("menu")->result();
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
        $this->db->insert('menu',$input);

        $this->response(['Menu created successfully.'], REST_Controller::HTTP_OK);
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_put($idMenu)
    {
        $input = $this->put();
        $this->db->update('menu', $input, array('idMenu'=>$idMenu));

        $this->response(['Menu updated successfully.'], REST_Controller::HTTP_OK);
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_delete($idMenu)
    {
        $this->db->delete('menu', array('idMenu'=>$idMenu));

        $this->response(['Menu deleted successfully.'], REST_Controller::HTTP_OK);
    }

}