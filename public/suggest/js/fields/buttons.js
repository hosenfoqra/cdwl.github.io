import ButtonManager from '../../../../assets/js/utils/button-manager/ButtonManager.js';
import Cars from '../../../../assets/js/classes/Cars.js';
import UrlParams from '../../../../assets/js/classes/UrlParams.js';
import Loader from '../../../../assets/js/utils/Loader.js';
import ErrorsPopup from '../../../../assets/js/utils/ErrorsPopup.js';
import inputs from './inputs.js';
import selects from './selects.js';
import Suggestions from '../../../../assets/js/classes/Suggestions.js';

// Button delete record
const btnSubmitClick = async (_callback) => {
    // Check checked category
    if (!selects.selectCategory.get_selected_value()) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            html: 'Please select category'
        })
        return
    }

    // Check description
    if (inputs.description.valueGet() === undefined) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            html: 'Please enter description'
        })
        return
    }

    const data = {
        category: selects.selectCategory.get_selected_text(),
        description: inputs.description.valueGet()
    }

    Loader.showLoading()
    const response = await Suggestions.createNewRecord(data)
    Loader.close()
    if (response.state) {
        // Clear fields
        inputs.description.valueSet('')
        selects.selectCategory.deselect()

        Swal.fire({
            icon: 'success',
            html: 'Suggestion sent successfully',
        })
    }
    else {
        const ErrorsPopupIns = new ErrorsPopup()
        ErrorsPopupIns.requestErrorSettings.showConfirmBtn = true
        ErrorsPopupIns.showRequestErrors(response.errors)
    }
}
const btnSubmit = new ButtonManager('main', 'btn-submit', btnSubmitClick)
btnSubmit.onClick() // Enable onClick

const buttons = {
    btnSubmit,
}

export default buttons
