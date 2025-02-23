// Trophy Counter Animation
const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
    const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const increment = target / 200;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

// 3D Tilt Effect for Sport Cards
VanillaTilt.init(document.querySelectorAll(".sport-card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});

// Interactive Map Hotspots
const hotspots = document.querySelectorAll('.hotspot');
hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', () => {
        const facility = hotspot.getAttribute('data-facility');
        showFacilityDetails(facility);
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sports Carousel Auto-scroll
const carousel = document.querySelector('.sports-carousel');
let scrollPosition = 0;
const scrollSpeed = 2;

function autoScroll() {
    scrollPosition += scrollSpeed;
    if (scrollPosition >= carousel.scrollWidth - carousel.clientWidth) {
        scrollPosition = 0;
    }
    carousel.scrollTo(scrollPosition, 0);
    requestAnimationFrame(autoScroll);
}
