// Function that generates a card that contains garage brief data
export const genGarageCard = (_garageData) => {

    const div = document.createElement('div')
    div.classList.add('col-12', 'col-md-4', 'my-3', 'd-flex', 'align-items-stretch')

    const html = `        
        <div class="card h-100 w-100 shadow card-hover">
            <div>
                <img class="img-fluid" src="../../assets/images/icons/car-service.png" style="height: 100px;">
            </div>
            <div class="card-body">
                <h4 class="card-title my-3 font-weight-bold">${_garageData.name}</h4>
                <h5 class="card-title my-3"><i class="fa fa-map-marker"></i> Location: ${_garageData.location}</h5>
                <h5 class="card-title my-3"><i class="fa fa-phone"></i> Phone: ${_garageData.phone}</h5>
            </div>
        </div>
    `
    div.innerHTML = html

    return div
}
