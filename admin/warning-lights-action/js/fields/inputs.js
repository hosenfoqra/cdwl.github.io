
import InputManager from '../../../../assets/js/utils/input-manager/InputManager.js';


const name = new InputManager('main', 'input-name')
const image = new InputManager('main', 'input-image')

const inputs = {
    name,
    image,
}

export default inputs
