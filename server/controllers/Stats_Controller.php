<?php

class Stats_Controller extends Controller
{
    public function __construct($_params)
    {
        $this->params = $_params;
    }

    /**
     * get all records from DB
     */
    function getAllRecords()
    {
        $this->state = true;

        $this->setModel('Cars_Model');
        $cars = $this->model->getAllRecords();

        $this->setModel('Garages_Model');
        $garages = $this->model->getAllRecords();

        $this->setModel('Mechanics_Model');
        $mechanics = $this->model->getAllRecords();


        $this->data = [
            'cars' => [],
            'garages' => [],
            'mechanics' => [],
        ];

        if (!empty($cars)) {
            $this->data['cars'] = $cars;
            $this->state = true;
        }
        if (!empty($garages) && empty($garages->errors)) {
            $this->data['garages'] = $garages;
            $this->state = true;
        }

        if (!empty($mechanics) && empty($mechanics->errors)) {
            $this->data['mechanics'] = $mechanics;
            $this->state = true;
        }

        return $this;
    }
}
