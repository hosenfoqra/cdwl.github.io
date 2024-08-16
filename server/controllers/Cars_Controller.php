<?php

class Cars_Controller extends Controller
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
        $this->setModel('Cars_Model');
        $records = $this->model->getAllRecords();

        // check for errors
        if (empty($records->errors)) {
            $this->state = true;
            $this->data = $records;
        }
        else {
            $this->state = false;
            $this->errors = $records->errors;
        }

        return $this;
    }

    /**
     * get all cars sub models
     */
    function getAllSubModels()
    {
        $this->setModel('Cars_Models_Model');
        $records = $this->model->getAllRecords();

        // check for errors
        if (empty($records->errors)) {
            $this->state = true;
            $this->data = $records;
        }
        else {
            $this->state = false;
        }

        return $this;
    }


    /**
     * Get record by id
     * Example of id: 64fee803195efc210d79b0b4
     */
    function getRecordById()
    {
        global $Errors, $ERROR_CODES;

        // Check passed id
        if (!isset($this->params['id']) || empty($this->params['id'])) {
            // store error
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['CARS']['GET']['MISSING_REQUEST_PARAMS']['ID'])->setErrorVariable('id')->setErrorDetails('id parameter is required')->gen();
            $this->state = false;
            return $this;
        }

        // Validate correct object id
        $validator = new ValidateMongoObjectId($this->params['id']);
        $validator->validate();
        if (!$validator->state) {
            // store error
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['CARS']['GET']['INVALID_DATA_TYPES']['OBJECT_ID'])->setErrorVariable('id')->setErrorDetails('Invalid ObjectId')->gen();
            $this->state = false;
            return $this;
        }

        $this->setModel('Cars_Model');
        $record = $this->model->getRecordById($this->params['id']);

        if (empty($record)) {
            // store error
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['CARS']['GET']['RESULTS']['NO_RESULTS'])->setErrorVariable('id')->setErrorDetails('no results found for this id')->gen();
            $this->state = false;
            return $this;
        }
        else {
            $this->state = true;
            $this->data = $record;
            return $this;
        }

    }

    function updateRecordData()
    {
        global $Errors, $ERROR_CODES;

        // Check passed id
        if (!isset($this->params['id']) || empty($this->params['id'])) {
            // store error
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['CARS']['UPDATE']['MISSING_REQUEST_PARAMS']['ID'])->setErrorVariable('id')->setErrorDetails('id parameter is required')->gen();
            $this->state = false;
            return $this;
        }

        // Validate correct object id
        $validator = new ValidateMongoObjectId($this->params['id']);
        $validator->validate();
        if (!$validator->state) {
            // store error
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['CARS']['UPDATE']['INVALID_DATA_TYPES']['OBJECT_ID'])->setErrorVariable('id')->setErrorDetails('Invalid ObjectId')->gen();
            $this->state = false;
            return $this;
        }

        // Check model required params
        $this->setModel('Cars_Model');
        $requiredColumns = $this->model->columns;

        // Validate columns to update
        foreach ($requiredColumns as $columnName => $requiredColumn) {
            if ($requiredColumn['isRequired']) {
                $errorData = $ERROR_CODES['CARS']['UPDATE']['MISSING_REQUEST_PARAMS'][strtoupper($columnName)];

                // Check if param found in request
                if (!isset($this->params[$columnName]) || empty($this->params[$columnName])) {
                    // store error
                    $this->errors[] = $Errors->setErrorData($errorData)->setErrorVariable($columnName)->setErrorDetails('')->gen();
                    $this->state = false;
                    return $this;
                }
            }
        }

        $updated = $this->model->updateRecordData($this->params['id'], $this->params);

        if (!$updated) {
            // store error
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['CARS']['UPDATE']['FAILED_TO_UPDATE'])->setErrorVariable('')->setErrorDetails('')->gen();
            $this->state = false;
            return $this;
        }
        else {
            $this->state = true;
            return $this;
        }
    }

    /**
     * Create new record
     */
    function createNewRecord() {
        global $ERROR_CODES, $Errors;

        // Check model required params
        $this->setModel('Cars_Model');
        $requiredColumns = $this->model->columns;

        // Validate columns to update
        foreach ($requiredColumns as $columnName => $requiredColumn) {
            if ($requiredColumn['isRequired']) {
                $errorData = $ERROR_CODES['CARS']['UPDATE']['MISSING_REQUEST_PARAMS'][strtoupper($columnName)];

                // Check if param found in request
                if (!isset($this->params[$columnName]) || empty($this->params[$columnName])) {
                    // store error
                    $this->errors[] = $Errors->setErrorData($errorData)->setErrorVariable($columnName)->setErrorDetails('')->gen();
                    $this->state = false;
                    return $this;
                }
            }
        }

        $insertResult = $this->model->createNewRecord($this->params);

        if ($insertResult !== null) {
            $this->state = true;
        }
        else {
            $this->state = false;
        }

        return $this;
    }

    function deleteRecord()
    {
        global $ERROR_CODES, $Errors;

        if (!isset($this->params['id']) || empty(trim($this->params['id']))) {
            // store error
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['CARS']['DELETE']['MISSING_REQUEST_PARAMS']['ID'])->setErrorVariable('id')->setErrorDetails('')->gen();
            $this->state = false;
            return $this;
        }

        $this->setModel('Cars_Model');
        $result = $this->model->deleteRecord($this->params['id']);

        if ($result) {
            $this->state = true;
            return $this;
        } else {
            // store error
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['CARS']['DELETE']['FAILED_TO_DELETE'])->setErrorVariable('id')->setErrorDetails('')->gen();
            $this->state = false;
            return $this;
        }
    }
}
