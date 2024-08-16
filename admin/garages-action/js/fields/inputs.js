
import InputManager from '../../../../assets/js/utils/input-manager/InputManager.js';

const name = new InputManager('main', 'input-name')
const location = new InputManager('main', 'input-location')
const phone = new InputManager('main', 'input-phone')

const inputs = {
    name,
    location,
    phone,
}

export default inputs
