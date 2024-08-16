
import ButtonManager from '../../../../assets/js/utils/button-manager/ButtonManager.js';
import Loader from '../../../../assets/js/utils/Loader.js';

// Navigate to add new record page
const btnAddNewGarageClick = async (_callback) => { window.location.href = "../garages-action/index.php?mode=add"; }
const btnAddNewGarage = new ButtonManager('main', 'btn-add-new-garage', btnAddNewGarageClick)
btnAddNewGarage.onClick() // Enable onClick

const buttons = {
    btnAddNewGarage,
}

export default buttons
