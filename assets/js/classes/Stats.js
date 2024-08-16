
import { API_STATS } from '../constants/API.js';
import Request from '../utils/Request.js';

class Stats {
    data = []

    constructor() {}

    async getAllDataFromServer() {
        const requestData = {
            controller: API_STATS.CONTROLLER,
            method: API_STATS.METHODS.GET_ALL_RECORDS
        }
        const response = await Request.send('GET', requestData)
        return response
    }
}

export default new Stats()
