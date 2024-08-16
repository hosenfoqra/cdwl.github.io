
import Loader from '../../../assets/js/utils/Loader.js';
import WarningLights from '../../../assets/js/classes/WarningLights.js';
import { genWarningLightCard, genWarningLightDetailedCard } from '../../../assets/js/components/cards/warning-light-card.js';


Loader.showLoading()



// Get warning lights for car model
const warningLightsResponse = await WarningLights.getAllDataFromServer()



// Build warning lights cards
if (warningLightsResponse.state && warningLightsResponse.data.length) {

    /**
     * Callback when clicking button to view warning light data
     * @param _warningLightData {object} E.g. - {
     *     "_id": {
     *         "$oid": "65045a9e540d4897ba08c1a7"
     *     },
     *     "car_id": "64fee803195efc210d79b0b4",
     *     "car_model_id": "64ff1cb0195efc210d79b0d3",
     *     "name": "Tire Pressure Monitoring Systems (TPMS)",
     *     "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/TPMS_warning_icon.svg/1024px-TPMS_warning_icon.svg.png",
     *     "description": ""
     * }
     */
    function viewWarningLightData(_warningLightData) {
        const card = genWarningLightDetailedCard(_warningLightData)

        Swal.fire({
            html: card,
            confirmButtonText: 'close',
        })
    }

    const warningLightsCards = document.createElement('div')
    warningLightsCards.classList.add('row')
    const warningLights = warningLightsResponse.data
    warningLights.map(warningLight => {
        warningLightsCards.appendChild(genWarningLightCard(warningLight, viewWarningLightData))
    })
    document.querySelector('#warning-lights').append(warningLightsCards)
}
else {
    document.querySelector('#warning-lights').innerHTML = 'No warning lights for this model yet...'
}

Loader.close()
