
import { API_SUGGESTIONS } from '../constants/API.js';
import Request from '../utils/Request.js';

class Suggestions {
    data = []

    constructor() {}

    async getAllDataFromServer() {
        const requestData = {
            controller: API_SUGGESTIONS.CONTROLLER,
            method: API_SUGGESTIONS.METHODS.GET_ALL_RECORDS
        }
        const response = await Request.send('GET', requestData)
        return response
    }

    async getAllOptionsFromServer() {
        const requestData = {
            controller: API_SUGGESTIONS.CONTROLLER,
            method: API_SUGGESTIONS.METHODS.GET_ALL_OPTIONS
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
            controller: API_SUGGESTIONS.CONTROLLER,
            method: API_SUGGESTIONS.METHODS.GET_RECORD_BY_ID,
            params: {
                id: _id
            }
        }
        const response = await Request.send('GET', requestData)
        return response
    }

    /**
     * Create new record
     * @param _data {object} E.g. {name: ''}
     * @return {Promise<object>}
     */
    async createNewRecord(_data) {
        const requestData = {
            controller: API_SUGGESTIONS.CONTROLLER,
            method: API_SUGGESTIONS.METHODS.CREATE_NEW_RECORD,
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
            controller: API_SUGGESTIONS.CONTROLLER,
            method: API_SUGGESTIONS.METHODS.DELETE_RECORD,
            params: {
                id : _recordId
            }
        }
        const response = await Request.send('GET', requestData)
        return response
    }
}

export default new Suggestions()
