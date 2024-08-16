
import Mechanics from '../../../assets/js/classes/Mechanics.js';
import Loader from '../../../assets/js/utils/Loader.js';
import { genMechanicCard } from '../../../assets/js/components/cards/mechanic-cards.js';
import { extractMongoObjectId } from '../../../assets/js/utils/mongo.js';

Loader.showLoading()

// Get garages
const mechanicsResponse = await Mechanics.getAllDataFromServer()

// Build cars cards component if found data
if (mechanicsResponse.state && mechanicsResponse.data.length) {
    const mechanicsData = mechanicsResponse.data
    for (const mechanicData of mechanicsData) {
        // Add card to page
        const html = genMechanicCard(mechanicData)
        document.querySelector('#mechanics-cards').appendChild(html)
    }
}
else {
    document.querySelector('#mechanics-cards').innerHTML = `<h3 class="w-100 text-center text-muted">Sorry, No mechanics have been found yet...</h3>`
}

Loader.close()
