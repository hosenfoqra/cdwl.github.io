
import Loader from '../../../assets/js/utils/Loader.js';
import UrlParams from '../../../assets/js/classes/UrlParams.js';
import ErrorsPopup from '../../../assets/js/utils/ErrorsPopup.js';
import Cars from '../../../assets/js/classes/Cars.js';
import WarningLights from '../../../assets/js/classes/WarningLights.js';
import CarsModels from '../../../assets/js/classes/CarsModels.js';
import WarningLightsTable from '../../warning-lights/js/tables/WarningLightsTable.js';
import selects from './fields/selects.js';
import inputs from './fields/inputs.js';
import buttons from './fields/buttons.js';

Loader.showLoading()

// Get cars
const carsResponse = await Cars.getAllDataFromServer()
if (carsResponse.state && carsResponse.data.length) {
    // Add cars into select
    const selectOptions = carsResponse.data
    selects.selectManufacturer.put_options(selectOptions, 'id', 'manufacturer')
}
// Show error if cars not grabbed
else if (!carsResponse.state || carsResponse.errors.length) {
    // Show request errors popup
    const ErrorsPopupIns = new ErrorsPopup()
    ErrorsPopupIns.requestErrorSettings.showConfirmBtn = true
    ErrorsPopupIns.requestErrorSettings.confirmButtonClickCallback = () => window.location.href = '../warning-lights/index.php'
    ErrorsPopupIns.showRequestErrors(carsResponse.errors)
}

// Get cars models
const carsModelsResponse = await CarsModels.getAllDataFromServer()
if (carsModelsResponse.state && carsModelsResponse.data.length) {
    // Add cars into select
    const selectOptions = carsModelsResponse.data
    selects.selectModel.put_options(selectOptions, 'id', 'name')
}
// Show error if cars not grabbed
else if (!carsModelsResponse.state || carsModelsResponse.errors.length) {
    // Show request errors popup
    const ErrorsPopupIns = new ErrorsPopup()
    ErrorsPopupIns.requestErrorSettings.showConfirmBtn = true
    ErrorsPopupIns.requestErrorSettings.confirmButtonClickCallback = () => window.location.href = '../warning-lights/index.php'
    ErrorsPopupIns.showRequestErrors(carsModelsResponse.errors)
}
Loader.close()

// Get mode
const mode = UrlParams.getParamByKey('mode')


// Check if car exists when mode is "edit"
if (mode === 'edit') {
    Loader.showLoading()

    const warningLightId = UrlParams.getParamByKey('id')
    const response = await WarningLights.getRecordById(warningLightId)

    // Check if data found
    if (response.state) {
        // Get car model manufacturer id
        const warningLightCarId = response.data.car_id
        // Set selected car
        selects.selectManufacturer.set_selected_option_by_value(warningLightCarId)

        // Get warning light car model id
        const warningLightCarModelId = response.data.car_model_id
        // Set selected car model
        selects.selectModel.set_selected_option_by_value(warningLightCarModelId)

        // Set inputs fields
        inputs.name.valueSet(response.data.name)
        inputs.image.valueSet(response.data.image)
        setTimeout(() => {
            // Timeout to set TinyMCE content - this is a known bug in chrome that can be fixed by using timeout only
            if (response.data.description) {
                tinymce.activeEditor.setContent(response.data.description)
            }
        }, 100)

        // Show delete button
        buttons.btnDeleteRecord.shown(true)

        Loader.close()
    }
    else {
        // Show request errors popup
        const ErrorsPopupIns = new ErrorsPopup()
        ErrorsPopupIns.requestErrorSettings.showConfirmBtn = true
        ErrorsPopupIns.requestErrorSettings.confirmButtonClickCallback = () => window.location.href = '../warning-lights/index.php'
        ErrorsPopupIns.showRequestErrors(response.errors)
    }
}
