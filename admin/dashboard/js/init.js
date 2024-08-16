
import Loader from '../../../assets/js/utils/Loader.js';
import Stats from '../../../assets/js/classes/Stats.js';
import ErrorsPopup from '../../../assets/js/utils/ErrorsPopup.js';

Loader.showLoading()
const statsResponse = await Stats.getAllDataFromServer()

if (statsResponse.state && statsResponse.data) {
    const countCars = statsResponse.data.cars.length
    const countGarages = statsResponse.data.garages.length
    const countMechanics = statsResponse.data.mechanics.length

    document.querySelector('#count-cars').innerHTML = countCars
    document.querySelector('#count-garages').innerHTML = countGarages
    document.querySelector('#count-mechanics').innerHTML = countMechanics
    Loader.close()
}
else {
    // Show request errors popup
    const ErrorsPopupIns = new ErrorsPopup()
    ErrorsPopupIns.requestErrorSettings.showConfirmBtn = true
    ErrorsPopupIns.showRequestErrors(statsResponse.errors)
}

