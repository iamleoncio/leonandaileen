        // Countdown to October 7, 2023, 3:00 PM
        const weddingDate = new Date('October 7, 2023 15:00:00').getTime();

        const countdownElement = document.getElementById('countdown');

        function updateCountdown() {
            const now = new Date().getTime();
            const timeDifference = weddingDate - now;

            if (timeDifference <= 0) {
                countdownElement.textContent = 'The Big Day Has Arrived!';
            } else {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }

        // Update the countdown every second
        setInterval(updateCountdown, 1000);

        // Initial update
        updateCountdown();

            // JavaScript to create the slideshow effect
    // JavaScript to create the slideshow effect
    const eventSlides = document.querySelectorAll('.event-slide');
    let currentSlideIndex = 0;

    function showSlide(slideIndex) {
        eventSlides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.opacity = '1';
            } else {
                slide.style.opacity = '0';
            }
        });
    }

    function nextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= eventSlides.length) {
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    }

    // Start the slideshow
    showSlide(currentSlideIndex);
    setInterval(nextSlide, 5000); // Change slide every 5 seconds


    // JavaScript to control the scroll-up button visibility
const scrollUpButton = document.querySelector('.scroll-up');
const eventSection = document.getElementById('event');
const splashSection = document.getElementById('splash');

// Function to toggle the scroll-up button visibility
function toggleScrollUpButtonVisibility() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Check if the user has scrolled to the "event" section
    if (scrollY >= eventSection.offsetTop) {
        scrollUpButton.style.display = 'block'; // Show the button
    } else {
        scrollUpButton.style.display = 'none'; // Hide the button
    }
}

// Listen for scroll events to toggle button visibility
window.addEventListener('scroll', toggleScrollUpButtonVisibility);

// Handle scroll-up button click event
scrollUpButton.addEventListener('click', () => {
    splashSection.scrollIntoView({
        behavior: 'smooth',
    });
});

// Initial check for scroll-up button visibility
toggleScrollUpButtonVisibility();


    document.addEventListener("DOMContentLoaded", function () {
        const navigationLinks = document.querySelectorAll(".nav-link");
    
        navigationLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const targetId = link.getAttribute("href").substring(1); // Remove the "#" symbol
                const targetSection = document.getElementById(targetId);
    
                if (targetSection) {
                    // Check if the target section is not the "splash" section
                    if (!targetSection.classList.contains("splash")) {
                        targetSection.scrollIntoView({
                            behavior: "smooth",
                        });
                    }
                }
            });
        });
    });
    
    
    
    