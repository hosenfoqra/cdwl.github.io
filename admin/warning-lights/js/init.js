
import Loader from '../../../assets/js/utils/Loader.js';
import WarningLights from '../../../assets/js/classes/WarningLights.js';
import CarsModels from '../../../assets/js/classes/CarsModels.js';
import WarningLightsTable from './tables/WarningLightsTable.js';
import { extractMongoObjectId } from '../../../assets/js/utils/mongo.js';
import ErrorsPopup from '../../../assets/js/utils/ErrorsPopup.js';
import Cars from '../../../assets/js/classes/Cars.js';
import buttons from './fields/buttons.js';
import {config} from './config.js';

/**
 * callback when clicking the car edit button
 * @param _carData {object}
 *
 * Example of _carData
 * {
 *     "_id": {
 *         "$oid": "64fee803195efc210d79b0b4"
 *     },
 *     "logo": "assets/images/cars/logos/renault.png",
 *     "manufacturer": "Renault"
 * }
 */
const carEditClickEvent = (_carData) => {
    const carId = extractMongoObjectId(_carData._id)

    // Navigate to car edit page
    window.location.href = `../${config.navigation.action}?mode=edit&id=${carId}`
}

Loader.showLoading()
const warningLightsTable = new WarningLightsTable('warning-lights-table')

// Grab cars from server
const carsResponse = await Cars.getAllDataFromServer()
if (!carsResponse.state || !carsResponse.data.length) {
    const msg = 'Failed to get cars from server!'
    Swal.fire({
        icon: 'error',
        html: msg
    })
    warningLightsTable.showNoResultsRow()
    throw msg
}

// Grab cars models from server
const carsModelsResponse = await CarsModels.getAllDataFromServer()
if (!carsModelsResponse.state || !carsModelsResponse.data.length) {
    const msg = 'Failed to get cars models from server!'
    Swal.fire({
        icon: 'error',
        html: msg
    })
    warningLightsTable.showNoResultsRow()
    throw msg
}

// Grab warning lights from server
const warningLightsResponse = await WarningLights.getAllDataFromServer()
if (!warningLightsResponse.state || warningLightsResponse.errors.length) {
    // Show request errors popup
    const ErrorsPopupIns = new ErrorsPopup()
    ErrorsPopupIns.requestErrorSettings.showConfirmBtn = true
    ErrorsPopupIns.requestErrorSettings.confirmButtonClickCallback = undefined
    ErrorsPopupIns.showRequestErrors(warningLightsResponse.errors)

    warningLightsTable.showNoResultsRow()
}
else {
    // Set edit button callback
    warningLightsTable.editBtnCallback = carEditClickEvent

    const warningLights = warningLightsResponse.data
    // Add warning lights into table
    if (warningLights.length) {
        warningLights.forEach(warningLight => {
            // Find car model data by its id
            const carModelData = CarsModels.findDataById(warningLight.car_model_id, carsModelsResponse.data)

            // Find car data by its id
            const carData = Cars.findCarDataByCarId(carModelData['car_id'], carsResponse.data)

            // Since warning light doesn't contain car model name, we'll add it
            warningLight['car_manufacturer_name'] = carData.manufacturer
            warningLight['car_model_name'] = carModelData.name

            warningLightsTable.rowAdd(warningLight)
        })
    }
    Loader.close()
}
