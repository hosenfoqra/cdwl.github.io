
import Loader from '../../../assets/js/utils/Loader.js';
import CarsTable from './tables/CarsTable.js';
import Cars from '../../../assets/js/classes/Cars.js';
import { extractMongoObjectId } from '../../../assets/js/utils/mongo.js';
import buttons from './fields/buttons.js';

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
    window.location.href = `../cars-action/index.php?mode=edit&id=${carId}`
}

Loader.showLoading()
const carsResponse = await Cars.getAllDataFromServer()

const carsTable = new CarsTable('cars-table')

if (carsResponse.state && carsResponse.data.length) {
    // Set edit button callback
    carsTable.editBtnCallback = carEditClickEvent

    // Add rows to table
    const cars = carsResponse.data
    cars.forEach(car => {
        carsTable.rowAdd(car)
    })
}
else {
    carsTable.showNoResultsRow()
}

Loader.close()
