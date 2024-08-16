
import { API_CARS } from '../constants/API.js';
import Request from '../utils/Request.js';

class Cars {
    data = []

    constructor() {}

    async getAllDataFromServer() {
        const requestData = {
            controller: API_CARS.CONTROLLER,
            method: API_CARS.METHODS.GET_ALL_RECORDS
        }
        const response = await Request.send('GET', requestData)
        return response
    }

    async getAllSubModels() {
        const requestData = {
            controller: API_CARS.CONTROLLER,
            method: API_CARS.METHODS.GET_ALL_SUB_MODELS
        }
        const response = await Request.send('GET', requestData)
        return response
    }

    /**
     * Get record by id
     * @param _id {string} E.g. 64fee803195efc210d79b0b4
     * @return {Promise<object>}
     */
    async getRecordById(_id) {
        const requestData = {
            controller: API_CARS.CONTROLLER,
            method: API_CARS.METHODS.GET_RECORD_BY_ID,
            params: {
                id: _id
            }
        }
        const response = await Request.send('GET', requestData)
        return response
    }

    /**
     * Update record data
     * @param _id {string} E.g. 64fee803195efc210d79b0b4
     * @param _data {object} E.g. {name: '', email: ''}
     * @return {Promise<object>}
     */
    async updateRecordData(_id, _data) {
        const requestData = {
            controller: API_CARS.CONTROLLER,
            method: API_CARS.METHODS.UPDATE_RECORD_DATA,
            params: {
                id: _id,
                ..._data
            }
        }
        const response = await Request.send('GET', requestData)
        return response
    }

    /**
     * Create new record
     * @param _data {object} E.g. {name: '', email: ''}
     * @return {Promise<object>}
     */
    async createNewRecord(_data) {
        const requestData = {
            controller: API_CARS.CONTROLLER,
            method: API_CARS.METHODS.CREATE_NEW_RECORD,
            params: {
                ..._data
            }
        }
        const response = await Request.send('GET', requestData)
        return response
    }

    /**
     * Create new record
     * @param _recordId {string} E.g. 64fee803195efc210d79b0b4
     * @return {Promise<object>}
     */
    async deleteRecord(_recordId) {
        const requestData = {
            controller: API_CARS.CONTROLLER,
            method: API_CARS.METHODS.DELETE_RECORD,
            params: {
                id : _recordId
            }
        }
        const response = await Request.send('GET', requestData)
        return response
    }

    findCarDataByCarId(_carId, _cars) {
        const carData = _cars.find(car => car._id['$oid'] == _carId)
        return carData
    }
}

export default new Cars()
