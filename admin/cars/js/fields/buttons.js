
import ButtonManager from '../../../../assets/js/utils/button-manager/ButtonManager.js';
import Loader from '../../../../assets/js/utils/Loader.js';

// Navigate to add new car page
const btnAddNewCarClick = async (_callback) => { window.location.href = "../cars-action/index.php?mode=add"; }
const btnAddNewCar = new ButtonManager('main', 'btn-add-new-car', btnAddNewCarClick)
btnAddNewCar.onClick() // Enable onClick

// We can enable or disable the button by using this simple line
// btnAddNewCar.enabled(false)

const buttons = {
    btnAddNewCar,
}

export default buttons
