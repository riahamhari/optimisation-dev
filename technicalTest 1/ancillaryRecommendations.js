// get JSON data
const partyComposition = jsonData.packageViewData.paxViewData;
const adults = partyComposition.noOfAdults;
const children = partyComposition.noOfChildren;


const seatMapWrapper = document.querySelector('.SeatMapCustomization__seatMapContainer')
const selectedSeatContainer = document.querySelector('.SeatMapCustomization__selectedSeatsContainer')

// container to check mutations
const luggageAncillaryContainer = document.querySelector('.LuggageAncillary__luggageContainer')
const luggageAncillaryBtn = document.querySelector('.buttons__quaternary')


const luggageCard = document.querySelectorAll('.cards__third')
const cardsWeight = document.querySelectorAll('.cards__weight')


let ancillaryRecommendation = "";
let copy = "";


// function for creating label based upon ancillary recommendation
const createFrequentlyBookedLabel = (copy) => {
    const frequentlyBookedLabel = document.createElement('header');
    const frequentlyBookedLabelText = document.createElement('span');
    frequentlyBookedLabel.style.backgroundColor = "#092A5E";
    frequentlyBookedLabel.style.color = "#FFFFFF";
    frequentlyBookedLabel.style.display = "flex";
    frequentlyBookedLabel.style.justifyContent = 'center';
    frequentlyBookedLabel.style.fontSize = "16px";
    frequentlyBookedLabelText.textContent = copy.toUpperCase();
    frequentlyBookedLabel.appendChild(frequentlyBookedLabelText);
    return frequentlyBookedLabel;
}

const updateDisplayedRecommendations = () => {
    if (adults >= 3 && children === 0) {
        ancillaryRecommendation = "Select your seats"
        copy = "Groups frequently book"
        seatMapWrapper.insertBefore(createFrequentlyBookedLabel(copy), selectedSeatContainer);
        const h3Element = seatMapWrapper.querySelector('h3')
        h3Element.innerText = ancillaryRecommendation
    } else if (adults >= 1 && children >= 1) {
        ancillaryRecommendation = "25kg Luggage"
        copy = "Families frequently book"
        for (let i = 0; i < cardsWeight.length; i++) {
            if (cardsWeight[i].innerText === '25kg') {
                if (!luggageCard[i].querySelector('header')) {
                    luggageCard[i].insertBefore(createFrequentlyBookedLabel(copy), luggageCard[i].children[0]);
                }

            }
        }
    } else if (adults === 2 && children === 0) {
        ancillaryRecommendation = "20kg luggage"
        copy = "Couples frequently book"
        for (let i = 0; i < cardsWeight.length; i++) {
            if (cardsWeight[i].innerText === '20kg') {
                if (!luggageCard[i].querySelector('header')) {
                    luggageCard[i].insertBefore(createFrequentlyBookedLabel(copy), luggageCard[i].children[0]);
                }

            }
        }
    }

}



updateDisplayedRecommendations()




