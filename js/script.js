document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Carousel functionality
    const carousel = document.getElementById('restaurant-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let scrollAmount = 0;

    nextBtn.addEventListener('click', function () {
        if (scrollAmount <= carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount += 220; // Adjust scroll distance
            carousel.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    });

    prevBtn.addEventListener('click', function () {
        if (scrollAmount > 0) {
            scrollAmount -= 220; // Adjust scroll distance
            carousel.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const carousel = document.querySelector('.restaurant-carousel');

    let scrollAmount = 0;

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
});
// JavaScript function to handle the order button clicks
function orderDish(dishName) {
    alert("You have selected the " + dishName + ". It will be added to your order.");
}


// Get elements
const contactMethod = document.getElementById('contact-method');
const contactInput = document.getElementById('contact-input');

// Listen to contact method change
contactMethod.addEventListener('change', function() {
    const selectedMethod = contactMethod.value;
    
    if (selectedMethod === 'email') {
        contactInput.placeholder = "Enter your email address";
        contactInput.type = "email"; // Set input type to email for validation
    } else if (selectedMethod === 'phone') {
        contactInput.placeholder = "Enter your phone number";
        contactInput.type = "tel"; // Set input type to tel for phone numbers
    }
});

// Button Click Action
const shareButton = document.querySelector('.share-link-btn');
shareButton.addEventListener('click', function() {
    const contactValue = contactInput.value;
    
    if (contactValue) {
        alert(`App link will be shared via ${contactMethod.value}: ${contactValue}`);
        // You can replace this alert with actual functionality to send the app link
    } else {
        alert('Please enter your contact details.');
    }
});

// JavaScript to toggle dropdowns
function toggleDropdown(id) {
    const dropdownBox = document.getElementById(id).parentElement;
    dropdownBox.classList.toggle('active');
}
// Example if you want to dynamically show content based on the country or language selected
const countryDropdown = document.getElementById('countries');
const languageDropdown = document.getElementById('languages');

countryDropdown.addEventListener('change', (e) => {
    console.log('Selected country: ', e.target.value);
});

languageDropdown.addEventListener('change', (e) => {
    console.log('Selected language: ', e.target.value);
});
function redirectToPage(page) {
    window.location.href = page;}


