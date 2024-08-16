<?php

class Suggestions_Model extends Model
{
    protected $mongoDBHandler;
    public $collectionName = "suggestions";
    public $collection;
    public array $columns = [
        'category' => [
            'isRequired' => true,
        ],
        'description' => [
            'isRequired' => true,
        ],
    ];

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
     * Create new record
     * @param array $_recordData - E.g. {name: '', job: '', ...etc}
     * @return bool
     */
    function createNewRecord(array $_recordData): bool
    {
        // Prepare the data to insert
        $recordToInsert = $this->createDefaultColumns($_recordData);

        $result = $this->collection->insertOne($recordToInsert);

        return $result->getInsertedCount() > 0;
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
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['SUGGESTIONS']['GET']['RESULTS']['NO_RESULTS'])->setErrorVariable('')->setErrorDetails('')->gen();
            return $this;
        }

        return $documents;
    }

    /**
     * Delete record
     * @param $_recordId - E.g. fee803195efc210d79b0b4
     * @return bool
     */
    public function deleteRecord($_recordId) {
        global $ERROR_CODES, $Errors;


        $filter = [
            '_id' => new MongoDB\BSON\ObjectId($_recordId), // Replace with the MongoDB document's ID you want to update
        ];

        $options = [];

        $result = $this->collection->deleteOne($filter);

        return $result->getDeletedCount() > 0;
    }

    public function createDefaultColumns(array $_columns)
    {
        date_default_timezone_set('Asia/Jerusalem');

        $defaultColumns = [
            'category' => isset($_columns['category']) && !empty(trim($_columns['category']))? $_columns['category']:'',
            'description' => isset($_columns['description']) && !empty(trim($_columns['description']))? $_columns['description']:'',
            'date' => date('Y-m-d H:i:s'),
        ];

        return $defaultColumns;
    }
}
