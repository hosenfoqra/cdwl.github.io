
import Suggestions from '../../../assets/js/classes/Suggestions.js';
import Loader from '../../../assets/js/utils/Loader.js';
import selects from './fields/selects.js';
import ErrorsPopup from '../../../assets/js/utils/ErrorsPopup.js';
import buttons from './fields/buttons.js';

Loader.showLoading()

// Get suggestion options
const suggestionsResponse = await Suggestions.getAllOptionsFromServer()

// Build cars cards component if found data
if (suggestionsResponse.state && suggestionsResponse.data.length) {
    selects.selectCategory.put_options(suggestionsResponse.data, 'id', 'name')
}
else {
    const ErrorsPopupIns = new ErrorsPopup()
    ErrorsPopupIns.requestErrorSettings.showConfirmBtn = true
    ErrorsPopupIns.showRequestErrors(suggestionsResponse.errors)
}

Loader.close()
