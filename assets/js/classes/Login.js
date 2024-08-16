
import { API_LOGIN } from '../constants/API.js';
import Request from '../utils/Request.js';

class Login {
    data = []

    constructor() {}

    async performAdminLogin(_loginData) {
        const requestData = {
            controller: API_LOGIN.CONTROLLER,
            method: API_LOGIN.METHODS.PERFORM_ADMIN_LOGIN,
            params: {
                email: _loginData.email,
                password: _loginData.password
            }
        }
        const response = await Request.send('GET', requestData)
        return response
    }
}

export default new Login()
