
import InputManager from '../../../../assets/js/utils/input-manager/InputManager.js';


const email = new InputManager('login-form', 'input-email')
const password = new InputManager('login-form', 'input-password')

const inputs = {
    email,
    password
}

export default inputs
