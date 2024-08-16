// Function that generates a card that contains garage brief data
export const genMechanicCard = (_mechanicData) => {

    const div = document.createElement('div')
    div.classList.add('col-12', 'col-md-4', 'my-3', 'd-flex', 'align-items-stretch')

    const html = `        
        <div class="card h-100 w-100 shadow card-hover">
            <div>
                <img class="img-fluid p-3" src="../../assets/images/icons/phonebook.png" style="height: 100px;">
            </div>
            <div class="card-body">
                <h4 class="card-title my-3 font-weight-bold">${_mechanicData.name}</h4>
                <h5 class="card-title my-3"><i class="fa fa-map-marker"></i> Location: ${_mechanicData.location}</h5>
                <h5 class="card-title my-3"><i class="fa fa-phone"></i> Phone: ${_mechanicData.phone}</h5>
            </div>
        </div>
    `
    div.innerHTML = html

    return div
}
