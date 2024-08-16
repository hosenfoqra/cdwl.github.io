<?php

global $baseUrl;
$CONSTANTS = [
    'APP_NAME' => 'CDWL',
    'APP_FULL_NAME' => 'Car Dashboard Warning Lights',
    'DEBUG' => false,
    'BASE_PATH' => $_SERVER['DOCUMENT_ROOT'],
    'SYS_CONTROLLERS' => [
        'Cars_Controller',
        'CarsModels_Controller',
        'Login_Controller',
        'WarningLights_Controller',
        'Garages_Controller',
        'Mechanics_Controller',
        'Stats_Controller',
        'Suggestions_Controller',
    ],
    'SYS_MODELS' => [
        'Cars_Model',
        'CarsModels_Model',
        'AdminLogin_Model',
        'WarningLights_Model',
        'Garages_Model',
        'Mechanics_Model',
        'Suggestions_Model',
        'SuggestionsOptions_Model',
    ],
];

$CONSTANTS['BASE_PATH'] = $baseUrl;
