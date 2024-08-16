// Function that generates a card that contains warning light image and title - as a brief
export const genWarningLightCard = (_warningLightData, _clickEvent=undefined) => {
    // console.log(_warningLightData)

    const div = document.createElement('div')
    div.classList.add('col-6', 'col-md-3', 'my-3', 'd-flex', 'align-items-stretch')

    const html = `        
        <div class="card h-100 w-100">
            <div>
                <img class="img-fluid" src="${_warningLightData.image}" style="height: 100px;">
            </div>
            <div class="card-body">
                <h5 class="card-title my-3">${_warningLightData.name}</h5>
                <button class="btn btn-primary" id="btn-show-warning-light-details" style="font-size: 12px;">Show Details</button>
            </div>
        </div>
    `
    div.innerHTML = html

    // Set click event if passed
    if (_clickEvent !== undefined) {
        div.querySelector('button#btn-show-warning-light-details').addEventListener('click', () => {
            _clickEvent(_warningLightData)
        })
    }

    return div
}

/**
 * Function that generates a card that contains detailed data about a warning light
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
export const genWarningLightDetailedCard = (_warningLightData) => {
    const div = document.createElement('div')
    div.classList.add('col-12')

    const html = `        
        <div>
            <img class="img-fluid" src="${_warningLightData.image}" style="height: 100px;">
        </div>
        <div class="card-body">
            <h5 class="card-title mt-3 mb-5" style="font-weight: bold; text-decoration: underline;">${_warningLightData.name}</h5>
            <div class="row" style="max-height: 50vh;">
                ${_warningLightData.description}
            </div>
        </div>
    `
    div.innerHTML = html

    return div
}
