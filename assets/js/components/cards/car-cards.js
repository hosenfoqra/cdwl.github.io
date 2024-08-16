
export const genCarCards = (_carData, _clickEvent=undefined) => {
    // console.log(_carData)

    const div = document.createElement('div')
    div.classList.add('col-sp', 'col-xl-3', 'col-lg-3', 'col-md-4', 'col-sm-6', 'col-6')

    // Set click event if passed
    if (_clickEvent !== undefined) {
        div.addEventListener('click', () => _clickEvent(_carData))
    }

    let html = `
        <div class="product-item">
            <div class="product-image-action">
                <div class="product-image">
                    <a href="javascript:void(0)">
                        <img class="img-fluid blur-up lazyload" src="${_carData.logo}" data-src="${_carData.logo}" alt="image" title="image" style="width: 300px; height: 300px; object-fit: contain;" />
                    </a>
                </div>
            </div>
            <div class="product-details">
                <h3 class="product-title"><strong>${_carData.manufacturer}</strong></h3>
                <h4 class="product-vendor">${_carData.manufacturer} models</h4>
                <a href="javascript:void(0)" class="btn btn-primary">Open</a>
            </div>
        </div>
    `
    div.innerHTML = html

    return div
}

export const genCarModelCard = (_carModelData, _clickEvent=undefined) => {
    const div = document.createElement('div')
    div.classList.add('card', 'col-6', 'col-sm-4', 'mx-auto')

    div.innerHTML = `
        <img class="card-img-top" src="${_carModelData.image}" alt="${_carModelData.manufacturer}" style="width: 100%; height: 100%; object-fit: contain;">
        <div class="card-body">
            <h5 class="card-title">${_carModelData.name}</h5>
            <p class="card-text" style="white-space: nowrap;">${_carModelData.years}</p>
            <button class="btn btn-primary">Go</button>
        </div>
    `

    // Set click event if passed
    if (_clickEvent !== undefined) {
        div.querySelector('button').addEventListener('click', () => {
            _clickEvent(_carModelData)
        })
    }

    return div
}
