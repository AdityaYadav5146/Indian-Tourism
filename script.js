// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the targeted section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal popup functionality for destinations
const modal = document.getElementById('destinationModal');
const closeButton = document.querySelector('.close-button');
const cards = document.querySelectorAll('.card');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

// Event listener for opening the modal
cards.forEach(card => {
    card.addEventListener('click', function () {
        const destination = card.getAttribute('data-destination');

        // Set the title and description based on the clicked destination
        switch (destination) {
            case "Taj Mahal":
                modalTitle.textContent = "Taj Mahal";
                modalDescription.textContent = "One of the seven wonders of the world, the Taj Mahal is a symbol of love and an architectural marvel located in Agra.";
                break;
            case "Kerala Backwaters":
                modalTitle.textContent = "Kerala Backwaters";
                modalDescription.textContent = "Experience the tranquil beauty of Kerala's backwaters, nestled between lush greenery and serene waters.";
                break;
            case "Leh Ladakh":
                modalTitle.textContent = "Leh Ladakh";
                modalDescription.textContent = "Situated in the Himalayas, Leh is known for its stunning landscapes, monasteries, and adventure sports.";
                break;
            case "Jaipur":
                modalTitle.textContent = "Jaipur - Pink City";
                modalDescription.textContent = "Known for its majestic palaces, forts, and vibrant markets, Jaipur is the capital of Rajasthan and a UNESCO World Heritage site.";
                break;
            case "Goa":
                modalTitle.textContent = "Goa";
                modalDescription.textContent = "Famous for its beautiful beaches, nightlife, and Portuguese heritage, Goa is one of India's top travel destinations.";
                break;
            case "Varanasi":
                modalTitle.textContent = "Varanasi - Spiritual Hub";
                modalDescription.textContent = "One of the oldest cities in the world, Varanasi is considered the spiritual capital of India, offering a unique cultural experience.";
                break;
            case "Rishikesh":
                modalTitle.textContent = "Rishikesh - Yoga Capital";
                modalDescription.textContent = "Known for yoga and adventure sports, Rishikesh is nestled in the foothills of the Himalayas on the banks of the Ganges River.";
                break;
            case "Andaman & Nicobar Islands":
                modalTitle.textContent = "Andaman & Nicobar Islands";
                modalDescription.textContent = "Famous for pristine beaches, coral reefs, and rich marine life, the Andaman Islands offer a tropical escape.";
                break;
            case "Mysore":
                modalTitle.textContent = "Mysore - City of Palaces";
                modalDescription.textContent = "Known for its royal palaces, gardens, and the grand Mysore Dasara festival, Mysore is a blend of history and culture.";
                break;
            case "Fatehpur Sikri":
                modalTitle.textContent = "Fatehpur Sikri";
                modalDescription.textContent = "Fatehpur Sikri is a UNESCO World Heritage site near Agra, known for its grand Mughal architecture and historical significance.";
                break;
            default:
                modalTitle.textContent = "Unknown Destination";
                modalDescription.textContent = "No description available.";
        }

        // Display the modal
        modal.style.display = "block";
    });
});

// Close modal functionality
closeButton.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Slideshow functionality for the hero section
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';  
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// Call the slideshow function
showSlides();

// Contact Form Validation
const contactForm = document.querySelector('#contact-form');
const nameInput = contactForm.querySelector('input[name="name"]');
const emailInput = contactForm.querySelector('input[name="email"]');
const messageInput = contactForm.querySelector('textarea[name="message"]');

// Simple form validation
contactForm.addEventListener('submit', (e) => {
    let valid = true;

    // Check if name is provided
    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        valid = false;
    }

    // Check if email is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    // Check if message is provided
    if (messageInput.value.trim() === "") {
        alert("Please enter a message.");
        valid = false;
    }

    if (!valid) {
        e.preventDefault(); // Prevent form submission if invalid
    }
});

// Optional: Lazy load images for better performance (you can add this to the cards or images section if needed)
const images = document.querySelectorAll('img');

function lazyLoadImages() {
    images.forEach(image => {
        if (image.getBoundingClientRect().top < window.innerHeight) {
            image.src = image.dataset.src;
            image.classList.add('loaded');
        }
    });
}

window.addEventListener('scroll', lazyLoadImages);
