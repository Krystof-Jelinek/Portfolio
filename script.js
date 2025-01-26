document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded successfully!");
});

document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});
