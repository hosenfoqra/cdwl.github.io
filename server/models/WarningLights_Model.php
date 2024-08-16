<?php

class WarningLights_Model extends Model
{
    protected $mongoDBHandler;
    public $collectionName = "warning_lights";
    public $collection;

    public array $columns = [
        'car_id' => [
            'isRequired' => true,
        ],
        'car_model_id' => [
            'isRequired' => true,
        ],
        'name' => [
            'isRequired' => true,
        ],
        'image' => [
            'isRequired' => true,
        ],
        'description' => [
            'isRequired' => false,
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
        return $this->mongoDBHandler->find($this->collectionName, $queryFilter);
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
            $this->errors[] = $Errors->setErrorData($ERROR_CODES['WARNING_LIGHTS']['GET']['RESULTS']['NO_RESULTS'])->setErrorVariable('')->setErrorDetails('')->gen();
            return $this;
        }

        return $documents;
    }

    function getRecordById(string $_id)
    {
        $filter = [
            '_id' => new MongoDB\BSON\ObjectId($_id), // Replace with the MongoDB document's ID you want to update
        ];

        $result = $this->collection->findOne($filter);

        if ($result) return iterator_to_array($result);
        else return [];
    }

    /**
     * update record data
     * @param $_recordId - E.g. 64fee803195efc210d79b0b4
     * @param array $_columnsToUpdate
     * Pass the columns you want to update
     * $columnsToUpdate = [
     *      'name' => 'New Name'
     * ];
     */
    function updateRecordData($_recordId, array $_columnsToUpdate)
    {
        $updateData = [
            '$set' => $this->createDefaultColumns($_columnsToUpdate)
        ];

        $filter = [
            '_id' => new MongoDB\BSON\ObjectId($_recordId), // Replace with the MongoDB document's ID you want to update
        ];

        $options = [];

        $result = $this->collection->updateOne($filter, $updateData, $options);

        return $result->getMatchedCount() > 0;
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

    function getRecordsByCarModelId(string $_carModelId) {
        $filter = [
            'car_model_id' => $_carModelId, // Replace with the MongoDB document's ID you want to update
        ];

        $result = $this->collection->find($filter);

        if ($result) return iterator_to_array($result);
        else return [];
    }

    public function createDefaultColumns(array $_columns)
    {
        $defaultColumns = [
            'car_id' => isset($_columns['car_id']) && !empty(trim($_columns['car_id']))? $_columns['car_id']:'',
            'car_model_id' => isset($_columns['car_model_id']) && !empty(trim($_columns['car_model_id']))? $_columns['car_model_id']:'',
            'name' => isset($_columns['name']) && !empty(trim($_columns['name']))? $_columns['name']:'',
            'image' => isset($_columns['image']) && !empty(trim($_columns['image']))? $_columns['image']:'',
            'description' => isset($_columns['description']) && !empty(trim($_columns['description']))? $_columns['description']:'',
        ];

        return $defaultColumns;
    }

}
