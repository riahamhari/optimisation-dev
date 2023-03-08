// get JSON data
const partyComposition = jsonData.packageViewData.paxViewData;


const adults = partyComposition.noOfAdults;
const children = partyComposition.noOfChildren;
const composition = partyComposition.paxComposition

let ancillaryRecommendation = "";
let copy = "";

if (adults >= 3 && children === 0) {
    ancillaryRecommendation = "Select your seats"
    copy = "Groups frequently book"
} else if (adults >= 1 && children >= 1) {
    ancillaryRecommendation = "25kg Luggage"
    copy = "Families frequently book"
} else if (adults === 2 && children === 0) {
    ancillaryRecommendation = "20kg luggage"
    copy = "Couples frequently book"
}


const seatMapWrapper = document.querySelector('.SeatMapCustomization__seatMapContainer')
const selectedSeatContainer = document.querySelector('.SeatMapCustomization__selectedSeatsContainer')

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

// insert frequently booked text


const luggageAncillary = document.querySelectorAll('.LuggageAncillary__luggages')
const luggageCard = document.querySelectorAll('.cards__third')
const cardAncillaryWrapper = document.querySelectorAll('.cards__horizontalAncillaryWrapper')

const frequentlyBookedLabel1 = createFrequentlyBookedLabel(copy);


const frequentlyBookedLabel2 = createFrequentlyBookedLabel(copy);


const frequentlyBookedLabel3 = createFrequentlyBookedLabel(copy);


if (ancillaryRecommendation === 'Select your seats') {
    seatMapWrapper.insertBefore(frequentlyBookedLabel1, selectedSeatContainer);
    const h3Element = seatMapWrapper.querySelector('h3')
    h3Element.innerText = ancillaryRecommendation
} else if (ancillaryRecommendation === '20kg luggage') {
    luggageCard[4].insertBefore(frequentlyBookedLabel3, cardAncillaryWrapper[4]);
    luggageCard[1].insertBefore(frequentlyBookedLabel2, cardAncillaryWrapper[1]);
} else if (ancillaryRecommendation === '25kg Luggage') {
    luggageCard[2].insertBefore(frequentlyBookedLabel3, cardAncillaryWrapper[2]);
    luggageCard[5].insertBefore(frequentlyBookedLabel2, cardAncillaryWrapper[5]);
}