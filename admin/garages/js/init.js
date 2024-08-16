
import Loader from '../../../assets/js/utils/Loader.js';
import GaragesTable from './tables/GaragesTable.js';
import Garages from '../../../assets/js/classes/Garages.js';
import { extractMongoObjectId } from '../../../assets/js/utils/mongo.js';
import buttons from './fields/buttons.js';

/**
 * callback when clicking the edit button
 * @param _garageData {object}
 *
 * Example of _garageData
 * {
 *     "_id": {
 *         "$oid": "64fee803195efc210d79b0b4"
 *     },
 *     "name": "John Garage",
 * }
 */
const garageEditClickEvent = (_garageData) => {
    const garageId = extractMongoObjectId(_garageData._id)

    // Navigate to edit page
    window.location.href = `../garages-action/index.php?mode=edit&id=${garageId}`
}

Loader.showLoading()
const garagesResponse = await Garages.getAllDataFromServer()

const garagesTable = new GaragesTable('garages-table')

if (garagesResponse.state && garagesResponse.data.length) {
    // Set edit button callback
    garagesTable.editBtnCallback = garageEditClickEvent

    // Add rows to table
    const garages = garagesResponse.data
    garages.forEach(garage => {
        garagesTable.rowAdd(garage)
    })
}
else {
    garagesTable.showNoResultsRow()
}

Loader.close()
