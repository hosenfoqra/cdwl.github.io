
import SelectManager from '../../../../assets/js/utils/select-manager/SelectManager.js';

const selectManufacturerChange = (_instance) => {
    console.log(_instance)
}
const selectManufacturer = new SelectManager('main', 'select-manufacturer')
const selectModel = new SelectManager('main', 'select-model')

const selects = {
    selectManufacturer,
    selectModel,
}

export default selects
