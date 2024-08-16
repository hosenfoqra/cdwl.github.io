
import ButtonManager from '../../../../assets/js/utils/button-manager/ButtonManager.js';
import UrlParams from '../../../../assets/js/classes/UrlParams.js';
import inputs from './inputs.js';
import Loader from '../../../../assets/js/utils/Loader.js';
import ErrorsPopup from '../../../../assets/js/utils/ErrorsPopup.js';
import Mechanics from '../../../../assets/js/classes/Mechanics.js';

// Button navigate to list
const btnMechanicsListClick = async (_callback) => {window.location.href = "../mechanics/index.php";}
const btnMechanicsList = new ButtonManager('main', 'btn-mechanics-list', btnMechanicsListClick)
btnMechanicsList.onClick() // Enable onClick

// Button save record
const btnSaveRecordClick = async (_callback) => {
    Loader.showLoading()

    const recordData = {
        name: inputs.name.valueGet(),
        location: inputs.location.valueGet(),
        phone: inputs.phone.valueGet(),
    }

    // Perform action based on mode
    const mode= UrlParams.getParamByKey('mode')

    if (mode === 'edit') {
        const recordId = UrlParams.getParamByKey('id')
        const response = await Mechanics.updateRecordData(recordId, recordData)
        if (response.state) {
            Swal.fire({
                icon: 'success',
                html: 'Record updated successfully'
            })
        }
        else {
            // Show request errors popup
            const ErrorsPopupIns = new ErrorsPopup()
            ErrorsPopupIns.requestErrorSettings.showConfirmBtn = true
            ErrorsPopupIns.showRequestErrors(response.errors)
        }
    }
    else if (mode === 'add') {
        const response = await Mechanics.createNewRecord(recordData)
        if (response.state) {
            Swal.fire({
                icon: 'success',
                html: 'Record created successfully'
            })

            // Clear fields
            const fields = [inputs.name, inputs.location, inputs.phone]
            fields.forEach(field => {
                field.valueClear()
            })
        }
        else {
            // Show request errors popup
            const ErrorsPopupIns = new ErrorsPopup()
            ErrorsPopupIns.requestErrorSettings.showConfirmBtn = true
            ErrorsPopupIns.showRequestErrors(response.errors)
        }
    }
}
const btnSaveRecord = new ButtonManager('main', 'btn-save-record', btnSaveRecordClick)
btnSaveRecord.onClick() // Enable onClick

// Button delete record
const btnDeleteRecordClick = async (_callback) => {
    // Show confirmation popup
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

            const recordId = UrlParams.getParamByKey('id')
            const response = await Mechanics.deleteRecord(recordId)
            if (response.state) {
                Swal.fire({
                    icon: 'success',
                    html: 'Record deleted successfully'
                }).then(result => {
                    window.location.href = '../mechanics/index.php'
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
const btnDeleteRecord = new ButtonManager('main', 'btn-delete-record', btnDeleteRecordClick)
btnDeleteRecord.onClick() // Enable onClick

const buttons = {
    btnMechanicsList,
    btnSaveRecord,
    btnDeleteRecord,
}

export default buttons
