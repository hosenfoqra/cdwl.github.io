
import Garages from '../../../assets/js/classes/Garages.js';
import Loader from '../../../assets/js/utils/Loader.js';
import { genGarageCard } from '../../../assets/js/components/cards/garage-cards.js';
import { extractMongoObjectId } from '../../../assets/js/utils/mongo.js';

Loader.showLoading()

// Get garages
const garagesResponse = await Garages.getAllDataFromServer()

// Build cars cards component if found data
if (garagesResponse.state && garagesResponse.data.length) {
    const garagesData = garagesResponse.data
    for (const garageData of garagesData) {
        // Add card to page
        const html = genGarageCard(garageData)
        document.querySelector('#garages-cards').appendChild(html)
    }
}
else {
    document.querySelector('#garages-cards').innerHTML = `<h3 class="w-100 text-center text-muted">Sorry, No garages have been found yet...</h3>`
}

Loader.close()
