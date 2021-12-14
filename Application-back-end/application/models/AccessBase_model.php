<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

class AccessBase_model extends CI_Model{

    public function insert($query){
        $this->db->query($query);  
    }
    public function find($query){
        $query = $this->db->query($query);
        $tab = array();
        foreach($query->result_array() as $row){
            array_push($tab, $row);
        }
        return $tab;
    }
}
