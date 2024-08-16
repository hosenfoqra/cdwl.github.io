<?php


class Model
{
    public $mongodbHandler;
    public $collectionName;
    public array $errors = [];

    public function __construct($mongodbHandler, $collectionName)
    {
        $this->mongodbHandler = $mongodbHandler;
        $this->collectionName = $collectionName;
    }

    public function filter(array $params, array $array_search)
    {
        $filter = [];

        foreach ($array_search as $key => $val) {
            if (isset($params[$key])) {
                $filter[$key] = $params[$key];
            }
        }

        return $this->mongodbHandler->find($this->collectionName, $filter);
    }

    // Add other MongoDB-specific methods here as needed
}
