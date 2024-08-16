
import UrlParams from '../../../assets/js/classes/UrlParams.js';
import Cars from '../../../assets/js/classes/Cars.js';
import Loader from '../../../assets/js/utils/Loader.js';
import buttons from './fields/buttons.js';
import inputs from './fields/inputs.js';
import Mechanics from '../../../assets/js/classes/Mechanics.js';

// Get mode
const mode = UrlParams.getParamByKey('mode')

// Check if car exists when mode is "edit"
if (mode === 'edit') {
    Loader.showLoading()

    const recordId = UrlParams.getParamByKey('id')
    const response = await Mechanics.getRecordById(recordId)

    // Check if data not found
    if (response.state) {
        // Set inputs fields
        inputs.name.valueSet(response.data.name)
        inputs.location.valueSet(response.data.location)
        inputs.phone.valueSet(response.data.phone)

        // Show delete button
        buttons.btnDeleteRecord.shown(true)

        Loader.close()
    }
    else {
        Swal.fire({
            icon: 'error',
            html: 'Record does not exists'
        }).then(result => {
            window.location.href = '../mechanics/index.php'
        })
    }
}

// Add validation for phone field
inputs.phone.getElement().addEventListener('input', (event) => {
    const typedValue = event.target.value;

    // Define regular expressions for valid phone number patterns
    const regex1 = /^(00972|0|\+972)[5][0-9]{8}$/;
    const regex2 = /^(00970|0|\+970)[5][0-9]{8}$/;
    const regex3 = /^(05[0-9]|0[12346789])([0-9]{7})$/;
    const regex4 = /^(00972|0|\+972|0)[2][0-9]{7}$/;

    // Check if the typedValue matches any of the valid patterns
    const isValid = regex1.test(typedValue) || regex2.test(typedValue) || regex3.test(typedValue) || regex4.test(typedValue);

    buttons.btnSaveRecord.enabled(isValid)
});
