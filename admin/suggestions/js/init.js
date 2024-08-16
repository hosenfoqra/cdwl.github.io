
import Loader from '../../../assets/js/utils/Loader.js';
import SuggestionsTable from './tables/SuggestionsTable.js';
import Suggestions from '../../../assets/js/classes/Suggestions.js';
import { extractMongoObjectId } from '../../../assets/js/utils/mongo.js';
import buttons from './fields/buttons.js';
import UrlParams from '../../../assets/js/classes/UrlParams.js';
import ErrorsPopup from '../../../assets/js/utils/ErrorsPopup.js';

const suggestionsTable = new SuggestionsTable('suggestions-table')

/**
 * callback when clicking the view button
 * @param _recordData {object}
 *
 * Example of _recordData
 * {
 *     "_id": {
 *         "$oid": "64fee803195efc210d79b0b4"
 *     },
 *     "category": "Car",
 *     "description": "...",
 * }
 */
const recordViewClickEvent = (_recordData) => {
    Swal.fire({
        icon: 'info',
        title: 'Suggestion Info',
        html: `
            <p style="text-decoration: underline;">Category: ${_recordData.category}</p>
            <p>Date: ${_recordData.date}</p>
            <p>${_recordData.description}</p>
        `,
        confirmButtonText: 'Close'
    })
}

/**
 * callback when clicking the delete button
 * @param _recordData {object}
 *
 * Example of _recordData
 * {
 *     "_id": {
 *         "$oid": "64fee803195efc210d79b0b4"
 *     },
 *     "category": "Car",
 *     "description": "...",
 * }
 */
const recordDeleteClickEvent = (_recordData) => {
    Swal.fire({
        icon: 'question',
        title: 'Delete Record',
        html: 'Do you want to delete this record ?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
    }).then(async result => {
        if (result.isConfirmed) {
            Loader.showLoading()

            const recordId = extractMongoObjectId(_recordData._id)
            const response = await Suggestions.deleteRecord(recordId)
            if (response.state) {
                // Delete record from table
                suggestionsTable.deleteRowById(recordId)

                // Show no results row if there are no records
                if (suggestionsTable.rowsCount() === 0) {
                    suggestionsTable.showNoResultsRow()
                }

                Swal.fire({
                    icon: 'success',
                    html: 'Record deleted successfully'
                })
            }
            else {
                // Show request errors popup
                const ErrorsPopupIns = new ErrorsPopup()
                ErrorsPopupIns.requestErrorSettings.showConfirmBtn = true
                ErrorsPopupIns.showRequestErrors(response.errors)
            }
        }
    })
}

Loader.showLoading()
const suggestionsResponse = await Suggestions.getAllDataFromServer()


if (suggestionsResponse.state && suggestionsResponse.data.length) {
    // Set edit button callback
    suggestionsTable.viewBtnCallback = recordViewClickEvent
    suggestionsTable.deleteBtnCallback = recordDeleteClickEvent

    // Add rows to table
    const suggestions = suggestionsResponse.data
    suggestions.forEach(suggestion => {
        suggestionsTable.rowAdd(suggestion)
    })
}
else {
    suggestionsTable.showNoResultsRow()
}

Loader.close()
