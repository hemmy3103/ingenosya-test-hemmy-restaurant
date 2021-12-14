<?php
 require APPPATH . '/libraries/REST_Controller.php';
 use Restserver\Libraries\REST_Controller;

class ingredient extends REST_Controller {

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
            $data = $this->db->get_where("ingredient", ['ingredient_id' => $id])->row_array();
            }else{
            $data = $this->db->get("ingredient")->result();
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
        $this->db->insert('ingredient',$input);

        $this->response(['ingredient created successfully.'], REST_Controller::HTTP_OK);
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_put($idingredient)
    {
        $input = $this->put();
        $this->db->update('ingredient', $input, array('idingredient'=>$idingredient));

        $this->response(['ingredient updated successfully.'], REST_Controller::HTTP_OK);
    }

    /**
     * Get All Data from this method.
     *
     * @return Response
     */
    public function index_delete($idingredient)
    {
        $this->db->delete('ingredient', array('idingredient'=>$idingredient));

        $this->response(['ingredient deleted successfully.'], REST_Controller::HTTP_OK);
    }

}