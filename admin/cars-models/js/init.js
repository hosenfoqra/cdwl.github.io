
import Loader from '../../../assets/js/utils/Loader.js';
import CarsModelsTable from './tables/CarsModelsTable.js';
import Cars from '../../../assets/js/classes/Cars.js';
import CarsModels from '../../../assets/js/classes/CarsModels.js';
import { extractMongoObjectId } from '../../../assets/js/utils/mongo.js';
import buttons from './fields/buttons.js';

Loader.showLoading()
const carsModelsTable = new CarsModelsTable('cars-models-table')

const cars = await Cars.getAllDataFromServer()
// Show error if failed to get cars from server
if (!cars.state || !cars.data.length) {
    const msg = 'Failed to get cars from server!'
    Swal.fire({
        icon: 'error',
        html: msg
    })
    carsModelsTable.showNoResultsRow()
    throw msg
}

const carsModelsResponse = await CarsModels.getAllDataFromServer()
// Show error if failed to get cars models from server
if (!carsModelsResponse.state || !carsModelsResponse.data.length) {
    const msg = 'Failed to get cars models from server!'
    Swal.fire({
        icon: 'error',
        html: msg
    })
    carsModelsTable.showNoResultsRow()
    throw msg
}

if (carsModelsResponse.state && carsModelsResponse.data.length) {
    // Add rows to table
    const models = carsModelsResponse.data
    models.forEach(model => {
        // Find car data by its id
        const carData = Cars.findCarDataByCarId(model.car_id, cars.data)

        // Since model does not have manufacturer name, we'll add it
        model['manufacturer'] = carData.manufacturer

        carsModelsTable.rowAdd(model)
    })
}
else {
    carsModelsTable.showNoResultsRow()
}

Loader.close()
