
// Select all portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');
let activeItem = null;  // To keep track of the currently active (expanded) project

// Loop through each item and add a click event listener
portfolioItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // If we click on the already active item, we close it
        if (activeItem === item) {
            item.classList.remove('open');
            activeItem = null;
            return;
        }

        // Close the currently expanded item if any
        if (activeItem) {
            activeItem.classList.remove('open');
        }

        // Expand the clicked item and set it as the active item
        item.classList.add('open');
        activeItem = item;

        // Prevent propagation to prevent closing the clicked item immediately
        e.stopPropagation();
    });
});

// Close the expanded item when clicking anywhere outside
window.addEventListener('click', () => {
    if (activeItem) {
        activeItem.classList.remove('open');
        activeItem = null;
    }
});