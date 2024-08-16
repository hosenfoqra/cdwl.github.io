
import Loader from '../../../assets/js/utils/Loader.js';
import MechanicsTable from './tables/MechanicsTable.js';
import Mechanics from '../../../assets/js/classes/Mechanics.js';
import { extractMongoObjectId } from '../../../assets/js/utils/mongo.js';
import buttons from './fields/buttons.js';

/**
 * callback when clicking the edit button
 * @param _recordData {object}
 *
 * Example of _recordData
 * {
 *     "_id": {
 *         "$oid": "64fee803195efc210d79b0b4"
 *     },
 *     "name": "John",
 * }
 */
const recordEditClickEvent = (_recordData) => {
    const recordId = extractMongoObjectId(_recordData._id)

    // Navigate to record edit page
    window.location.href = `../mechanics-action/index.php?mode=edit&id=${recordId}`
}

Loader.showLoading()
const mechanicsResponse = await Mechanics.getAllDataFromServer()

const mechanicsTable = new MechanicsTable('mechanics-table')

if (mechanicsResponse.state && mechanicsResponse.data.length) {
    // Set edit button callback
    mechanicsTable.editBtnCallback = recordEditClickEvent

    // Add rows to table
    const mechanics = mechanicsResponse.data
    mechanics.forEach(mechanic => {
        mechanicsTable.rowAdd(mechanic)
    })
}
else {
    mechanicsTable.showNoResultsRow()
}

Loader.close()
