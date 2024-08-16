<?php

class SuggestionsOptions_Model extends Model
{
    protected $mongoDBHandler;
    public $collectionName = "suggestion-options";
    public $collection;

    function __construct()
    {
        $this->mongoDBHandler = new MongoDBHandler();
        $this->collection = $this->mongoDBHandler->db->selectCollection($this->collectionName);
    }

    /**
     * Search for data
     * @param array $_params
     * @param array $array_search
     * @return array
     */
    public function filter($_params = [], $array_search = [])
    {
        $filter = [];

        foreach ($array_search as $key => $type) {
            if (isset($_params[$key])) {
                $value = $_params[$key];

                // Convert the value according to the specified type
                switch ($type[0]) {
                    case 's':
                        $filter[$key] = (string) $value;
                        break;
                    case 'i':
                        $filter[$key] = (int) $value;
                        break;
                    // Add more cases for other data types if needed
                }
            }
        }

        // Construct the MongoDB query filter
        $queryFilter = ['_id' => ['$exists' => true]]; // Match all documents by default
        if (!empty($filter)) {
            $queryFilter = $filter;
        }

        // Use MongoDBHandler to fetch results
        return iterator_to_array($this->mongoDBHandler->find($this->collectionName, $queryFilter));
    }

    /**
     * get all records
     */
    public function getAllRecords() {
        global $ERROR_CODES, $Errors;

        // Find all documents in the collection
        $cursor = $this->collection->find([]);

        // Convert the cursor to an array of documents
        $documents = [];
        foreach ($cursor as $document) {
            $documents[] = $document;
        }

        if (!$documents) {
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['SUGGESTIONS_OPTIONS']['GET']['RESULTS']['NO_RESULTS'])>setErrorVariable('')->setErrorDetails('')->gen();
            return $this;
        }

        return $documents;
    }
}
