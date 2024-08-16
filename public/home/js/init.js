
import Cars from '../../../assets/js/classes/Cars.js';
import CarsModels from '../../../assets/js/classes/CarsModels.js';
import Loader from '../../../assets/js/utils/Loader.js';
import { genCarCards, genCarModelCard } from '../../../assets/js/components/cards/car-cards.js';
import { extractMongoObjectId } from '../../../assets/js/utils/mongo.js';

Loader.showLoading()

// Get cars
const carsResponse = await Cars.getAllDataFromServer()
const carModelsResponse = await CarsModels.getAllDataFromServer();

const carModelCardOnClick = _carModelData => {
    console.log(_carModelData)
    const carModelId = extractMongoObjectId(_carModelData._id)
    window.location.href = `../car-model-data/index.php?id=${carModelId}`
}

const carCardOnClick = _carData => {
    const carId = extractMongoObjectId(_carData._id)

    /*
        Get car models

        Example of data:
        [
            {
                "_id": {
                    "$oid": "6500abee9d266ba0cb03d29d"
                },
                "car_id": "64fef065195efc210d79b0b5",
                "name": "Corolla",
                "years": "2000-2023",
                "image": "https://s3.amazonaws.com/toyota.site.toyota-v5/tci-prod/toyota/media/build/cor/col/big/b24_bprbe_fl1_01k3_a.png?ck=09082023052311"
            }
        ]
     */
    let carModels = []
    if (carModelsResponse.state && carModelsResponse.data.length) {
        carModels = carModelsResponse.data.filter(subModel => subModel.car_id === carId)
    }

    const carModelsCards = document.createElement('div')
    carModelsCards.classList.add('d-flex')

    // Generate car models cards if found
    if (carModels?.length) {
        carModels.forEach(carModel => {
            const carModelCard = genCarModelCard(carModel, carModelCardOnClick)
            carModelsCards.appendChild(carModelCard)
        })
    }
    else {
        carModelsCards.innerHTML = `<p class="w-100">No models have been found...</p>`
    }

    Swal.fire({
        title: `${_carData.manufacturer} Models`, // Set the title to the car name
        html: carModelsCards,
        confirmButtonText: 'Close',
    });
}

// Build cars cards component if found data
if (carsResponse.state && carsResponse.data.length) {
    const carsData = carsResponse.data
    for (const carData of carsData) {
        // Add card to page
        const html = genCarCards(carData, carCardOnClick)
        document.querySelector('#cars-cards').appendChild(html)
    }
}
else {
    document.querySelector('#cars-cards').innerHTML = `<h3 class="w-100 text-center text-muted">Sorry, No cars have been found...</h3>`
}

Loader.close()
