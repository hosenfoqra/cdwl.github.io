export const API = {
    ENDPOINT: '../../server/'
}

export const API_CARS = {
    CONTROLLER: 'Cars_Controller',
    METHODS: {
        GET_ALL_RECORDS: 'getAllRecords',
        GET_ALL_SUB_MODELS: 'getAllSubModels',
        GET_RECORD_BY_ID: 'getRecordById',
        UPDATE_RECORD_DATA: 'updateRecordData',
        CREATE_NEW_RECORD: 'createNewRecord',
        DELETE_RECORD: 'deleteRecord',
    },
}

export const API_CARS_MODELS = {
    CONTROLLER: 'CarsModels_Controller',
    METHODS: {
        GET_ALL_RECORDS: 'getAllRecords',
        GET_RECORD_BY_ID: 'getRecordById',
        UPDATE_RECORD_DATA: 'updateRecordData',
        CREATE_NEW_RECORD: 'createNewRecord',
        DELETE_RECORD: 'deleteRecord',
    },
}

export const API_WARNING_LIGHTS = {
    CONTROLLER: 'WarningLights_Controller',
    METHODS: {
        GET_ALL_RECORDS: 'getAllRecords',
        GET_RECORD_BY_ID: 'getRecordById',
        UPDATE_RECORD_DATA: 'updateRecordData',
        CREATE_NEW_RECORD: 'createNewRecord',
        DELETE_RECORD: 'deleteRecord',
        GET_RECORD_BY_CAR_MODEL_ID: 'getRecordsByCarModelId',
    },
}

export const API_GARAGES = {
    CONTROLLER: 'Garages_Controller',
    METHODS: {
        GET_ALL_RECORDS: 'getAllRecords',
        GET_RECORD_BY_ID: 'getRecordById',
        UPDATE_RECORD_DATA: 'updateRecordData',
        CREATE_NEW_RECORD: 'createNewRecord',
        DELETE_RECORD: 'deleteRecord',
        GET_RECORD_BY_CAR_MODEL_ID: 'getRecordsByCarModelId',
    },
}

export const API_MECHANICS = {
    CONTROLLER: 'Mechanics_Controller',
    METHODS: {
        GET_ALL_RECORDS: 'getAllRecords',
        GET_RECORD_BY_ID: 'getRecordById',
        UPDATE_RECORD_DATA: 'updateRecordData',
        CREATE_NEW_RECORD: 'createNewRecord',
        DELETE_RECORD: 'deleteRecord',
        GET_RECORD_BY_CAR_MODEL_ID: 'getRecordsByCarModelId',
    },
}

export const API_STATS = {
    CONTROLLER: 'Stats_Controller',
    METHODS: {
        GET_ALL_RECORDS: 'getAllRecords',
    },
}

export const API_LOGIN = {
    CONTROLLER: 'Login_Controller',
    METHODS: {
        PERFORM_ADMIN_LOGIN: 'performAdminLogin',
    },
}

export const API_SUGGESTIONS = {
    CONTROLLER: 'Suggestions_Controller',
    METHODS: {
        GET_ALL_RECORDS: 'getAllRecords',
        GET_ALL_OPTIONS: 'getAllOptions',
        CREATE_NEW_RECORD: 'createNewRecord',
        DELETE_RECORD: 'deleteRecord',
    },
}
