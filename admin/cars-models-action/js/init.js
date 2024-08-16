
import UrlParams from '../../../assets/js/classes/UrlParams.js';
import ErrorsPopup from '../../../assets/js/utils/ErrorsPopup.js';
import Cars from '../../../assets/js/classes/Cars.js';
import CarsModels from '../../../assets/js/classes/CarsModels.js';
import Loader from '../../../assets/js/utils/Loader.js';
import selects from './fields/selects.js';
import buttons from './fields/buttons.js';
import inputs from './fields/inputs.js';

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
    ErrorsPopupIns.requestErrorSettings.confirmButtonClickCallback = () => window.location.href = '../cars-models/index.php'
    ErrorsPopupIns.showRequestErrors(carsResponse.errors)
}
Loader.close()

// Get mode
const mode = UrlParams.getParamByKey('mode')

// Check if car exists when mode is "edit"
if (mode === 'edit') {
    Loader.showLoading()

    const carModelId = UrlParams.getParamByKey('id')
    const response = await CarsModels.getRecordById(carModelId)

    // Check if data not found
    if (response.state) {
        // Set inputs fields
        inputs.name.valueSet(response.data.name)
        inputs.image.valueSet(response.data.image)
        inputs.years.valueSet(response.data.years)
        setTimeout(() => {
            // Timeout to set TinyMCE content - this is a known bug in chrome that can be fixed by using timeout only
            if (response.data.description) {
                tinymce.activeEditor.setContent(response.data.description)
            }
        }, 100)

        // Set selected manufacturer
        selects.selectManufacturer.set_selected_option_by_value(response.data.car_id)

        // Show delete button
        buttons.btnDeleteRecord.shown(true)

        Loader.close()
    } else {
        // Show request errors popup
        const ErrorsPopupIns = new ErrorsPopup()
        ErrorsPopupIns.requestErrorSettings.showConfirmBtn = true
        ErrorsPopupIns.requestErrorSettings.confirmButtonClickCallback = () => window.location.href = '../cars-models/index.php'
        ErrorsPopupIns.showRequestErrors(response.errors)
    }
}
