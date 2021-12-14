<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

class Etudiant_model extends CI_Model{

    public function getETU($token)
    {
        $sql = "select numETU from Etudiant where token = '%s'";
        $sql = sprintf($sql, $token);
        $result = $this->find($sql);
        return $result[0]['numETU'];
    }

    public function getToken($input)
    {
        $sql = "select token from Etudiant where numETU = '%s' AND motDePasse=sha1('%s')";
        $sql = sprintf($sql, $input['numETU'], $input['motDePasse']);
        $result = $this->find($sql);
        $token = "";
        if(count($result) > 0)
            $token = $result[0]['token'];
        return $token;
    }

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
