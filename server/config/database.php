<?php

use MongoDB\Client;
use MongoDB\Driver\Manager;

$connectionString = "mongodb+srv://hossen:hosen@cluster48195.s5mecn5.mongodb.net/";

// Create a new client and connect to the server
$client = new MongoDB\Client($connectionString);
//$db = $client->cdwl;
//$collection = $db->cars;

//// Find all documents in the "cars" collection
//$cursor = $collection->find();
//
//// Iterate through the results and display them
//foreach ($cursor as $document) {
//    echo '<pre>';
//    print_r($document);
//    echo '</pre>';
//}
