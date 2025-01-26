
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

const translations = {
    en: {
        about: "About Me",
        portfolio: "Portfolio",
        cv: "CV",
        contact: "Contact",
        intro: "Feel free to get in touch with me using any of these channels",
        email: "Email",
        phone: "Phone",
        linkedin: "Visit my profile"
    },
    cz: {
        about: "O mně",
        portfolio: "Portfolio",
        cv: "Životopis",
        contact: "Kontakt",
        intro: "Neváhejte mě kontaktovat pomocí těchto kanálů",
        email: "E-mail",
        phone: "Telefon",
        linkedin: "Navštivte můj profil"
    }
};

// Function to switch language
function switchLanguage(lang) {
    // Update navbar links
    document.querySelector('a[href="#about"]').textContent = translations[lang].about;
    document.querySelector('a[href="#portfolio"]').textContent = translations[lang].portfolio;
    document.querySelector('a[href="#cv"]').textContent = translations[lang].cv;
    document.querySelector('a[href="#contact"]').textContent = translations[lang].contact;

    // Update other text on the page
    document.querySelector('.footer p').textContent = translations[lang].intro;
    document.querySelector('.contact-card[href^="mailto"] h3').textContent = translations[lang].email;
    document.querySelector('.contact-card[href^="tel"] h3').textContent = translations[lang].phone;
    document.querySelector('.contact-card[href*="linkedin"] h3').textContent = translations[lang].linkedin;
}

// Event listeners for the flag buttons
document.getElementById("lang-en").addEventListener("click", () => switchLanguage("en"));
document.getElementById("lang-cz").addEventListener("click", () => switchLanguage("cz"));

// Set default language on page load
window.addEventListener("DOMContentLoaded", () => switchLanguage("en"));