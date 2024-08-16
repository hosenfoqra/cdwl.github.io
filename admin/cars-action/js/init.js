
import UrlParams from '../../../assets/js/classes/UrlParams.js';
import Cars from '../../../assets/js/classes/Cars.js';
import Loader from '../../../assets/js/utils/Loader.js';
import buttons from './fields/buttons.js';
import inputs from './fields/inputs.js';

// Get mode
const mode = UrlParams.getParamByKey('mode')

// Check if car exists when mode is "edit"
if (mode === 'edit') {
    Loader.showLoading()

    const carId = UrlParams.getParamByKey('id')
    const response = await Cars.getRecordById(carId)

    // Check if data not found
    if (response.state) {
        // Set inputs fields
        inputs.manufacturer.valueSet(response.data.manufacturer)
        inputs.logo.valueSet(response.data.logo)

        // Show delete button
        buttons.btnDeleteRecord.shown(true)

        Loader.close()
    }
    else {
        Swal.fire({
            icon: 'error',
            html: 'Record does not exists'
        }).then(result => {
            window.location.href = '../cars/index.php'
        })
    }
}
