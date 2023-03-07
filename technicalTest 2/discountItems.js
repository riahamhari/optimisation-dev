
// search results container
const searchResultsContainer = document.querySelector('.resultsWrapper');

// Create  new observer
const observer = new MutationObserver(mutations => {
    // script to be run again when changes occur
    searchResultsUpdated();
});

// Define the observer's configuration
const config1 = { attributes: true, childList: true, subtree: true };

// Start the observer
observer.observe(searchResultsContainer, config1);



const searchResultsUpdated = () => {
    // search result items
    const searchResults = document.querySelectorAll('.ResultListItemV2__discountWrapper');

    // Loop through each search result item
    searchResults.forEach(result => {
        // Find the discount message element
        const discountMessage = result.querySelector('.ResultListItemV2__discountInfo');


        // If discount message element exists and the discount is less than 200
        if (discountMessage && discountMessage.textContent.includes("£") && parseInt(discountMessage.textContent.split("£")[1]) < 200) {

            discountMessage.style.display = 'none';


        }
    });
}

searchResultsUpdated()
