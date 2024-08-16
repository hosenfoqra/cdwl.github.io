
import ButtonManager from '../../../../assets/js/utils/button-manager/ButtonManager.js';
import ErrorsPopup from '../../../../assets/js/utils/ErrorsPopup.js';
import Cars from '../../../../assets/js/classes/Cars.js';
import CarsModels from '../../../../assets/js/classes/CarsModels.js';
import UrlParams from '../../../../assets/js/classes/UrlParams.js';
import inputs from './inputs.js';
import Loader from '../../../../assets/js/utils/Loader.js';
import selects from './selects.js';
import WarningLights from '../../../../assets/js/classes/WarningLights.js';

// Button navigate to cars list
const btnWarningLightsListClick = async (_callback) => {window.location.href = "../warning-lights/index.php";}
const btnWarningLightsList = new ButtonManager('main', 'btn-warning-lights-list', btnWarningLightsListClick)
btnWarningLightsList.onClick() // Enable onClick

// Button save record
const btnSaveRecordClick = async (_callback) => {
    Loader.showLoading()

    const recordData = {
        car_id: selects.selectManufacturer.get_selected_value(),
        car_model_id: selects.selectModel.get_selected_value(),
        name: inputs.name.valueGet(),
        image: inputs.image.valueGet(),
        description: tinyMCE.activeEditor.getContent(),
    }

    // Perform action based on mode
    const mode= UrlParams.getParamByKey('mode')

    if (mode === 'edit') {
        const recordId = UrlParams.getParamByKey('id')
        const response = await WarningLights.updateRecordData(recordId, recordData)
        if (response.state && !response.errors.length) {
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
        const response = await WarningLights.createNewRecord(recordData)
        if (response.state && !response.errors.length) {
            Swal.fire({
                icon: 'success',
                html: 'Record created successfully'
            })

            // Clear fields
            const fields = [inputs.name, inputs.years, inputs.image, inputs.description]
            fields.forEach(field => field.valueClear())

            // Clear selected car
            selects.selectManufacturer.set_selected_option_by_value('')
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
            const response = await WarningLights.deleteRecord(recordId)
            if (response.state) {
                Swal.fire({
                    icon: 'success',
                    html: 'Record deleted successfully'
                }).then(result => {
                    window.location.href = '../warning-lights/index.php'
                })
            }
            else {
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
    btnWarningLightsList,
    btnSaveRecord,
    btnDeleteRecord,
}

export default buttons
