
import ButtonManager from '../../../../assets/js/utils/button-manager/ButtonManager.js';
import Loader from '../../../../assets/js/utils/Loader.js';

// Navigate to add new car page
const btnAddNewCarClick = async (_callback) => { window.location.href = "../cars-models-action/index.php?mode=add"; }
const btnAddNewCar = new ButtonManager('main', 'btn-add-new-car-model', btnAddNewCarClick)
btnAddNewCar.onClick() // Enable onClick

const buttons = {
    btnAddNewCar,
}

export default buttons
