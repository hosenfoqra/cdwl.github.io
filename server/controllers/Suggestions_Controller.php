<?php

class Suggestions_Controller extends Controller
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
        $this->setModel('Suggestions_Model');
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
     * get all options from DB
     */
    function getAllOptions()
    {
        $this->setModel('SuggestionsOptions_Model');
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
     * Create new record
     */
    function createNewRecord() {
        global $ERROR_CODES, $Errors;

        // Check model required params
        $this->setModel('Suggestions_Model');
        $requiredColumns = $this->model->columns;

        // Validate columns to update
        foreach ($requiredColumns as $columnName => $requiredColumn) {
            if ($requiredColumn['isRequired']) {
                $errorData = $ERROR_CODES['SUGGESTIONS']['CREATE']['MISSING_REQUEST_PARAMS'][strtoupper($columnName)];

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
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['SUGGESTIONS']['DELETE']['MISSING_REQUEST_PARAMS']['ID'])->setErrorVariable('id')->setErrorDetails('')->gen();
            $this->state = false;
            return $this;
        }

        $this->setModel('Suggestions_Model');
        $result = $this->model->deleteRecord($this->params['id']);

        if ($result) {
            $this->state = true;
            return $this;
        } else {
            // store error
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['SUGGESTIONS']['DELETE']['FAILED_TO_DELETE'])->setErrorVariable('')->setErrorDetails('')->gen();
            $this->state = false;
            return $this;
        }
    }
}
