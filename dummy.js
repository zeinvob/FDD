const cardWrapper = document.getElementById('cardWrapper');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

// Initialize a variable to hold the current card index
let currentIndex = 0;

// Function to update the position of the cardWrapper based on the index
function updateCardPosition() {
    const cardWidth = 300; // Width of each card
    const visibleCards = 3; // Number of cards visible at a time
    const offset = currentIndex * cardWidth; // Calculate the offset
    cardWrapper.style.transform = `translateX(-${offset}px)`; // Update position
}

// Event listener for the left button
leftButton.addEventListener('click', () => {
    // Decrease the index, but ensure it doesn't go below 0
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateCardPosition(); // Update card position
});

// Event listener for the right button
rightButton.addEventListener('click', () => {
    // Increase index, but ensure it doesn't exceed the last card
    if (currentIndex < 2) { // 2 represents the last set for 5 cards
        currentIndex++;
    }
    updateCardPosition(); // Update card position
});