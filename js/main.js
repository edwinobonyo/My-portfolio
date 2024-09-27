//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Selecting modal elements
const serviceModals = document.querySelectorAll(".service .service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

// Function to open modal
const openModal = (index) => {
    serviceModals[index].classList.add("active");
};

// Adding click event listeners to learn more buttons
learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        openModal(i);
    });
});

// Adding click event listeners to modal close buttons
modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modal) => {
            modal.classList.remove("active");
        });
    });
});







//Portfolio section- modal

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

// Function to open modal
var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
};

// Adding click event listeners to imgCards
imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

// Adding click event listeners to modal close buttons
portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalsView) => {
            portfolioModalsView.classList.remove("active");
        });
    });
});

// Our Clients swiper

var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   Light/dark theme button

const themeBtn = document.querySelector(".theme-btn")
  themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");
    
    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
  });

  const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
  const getCurrentIcon = () => themeBtnt.classList.contains("sun") ? "sun" : "moon";

// Retrieve saved theme and icon from localStorage
const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

// Initialize theme and icon based on saved values
if (savedTheme) {
    // Apply saved theme
    document.body.classList.add(savedTheme + "-theme");
}

if (savedIcon) {
    // Apply saved icon
    if (savedIcon === "sun") {
        themeBtn.classList.add("sun");
    } else {
        themeBtn.classList.remove("sun");
    }
}
//   scroll to top button

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*='" + id +"']").classList.add("active");
        }
        else {
            document.querySelector(".nav-items a[href*='" + id +"']").classList.remove("active");
        }
    });
});


//Responsive navigation menu toggle-add functionality to show the navigation menu when the menu button is clicked and hide it when the close button is clicked. 

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");
// Show navigation menu
menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

// Hide navigation menu
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

// Hide navigation menu when a navigation link is clicked
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//scroll reveal animations
//Common reveal options to create rveal animations
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
 });

 //target elements, and specify options to create reveal animations

 ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', {delay: 500, origin: 'left'});
 ScrollReveal().reveal('.home .info h3, .home .info p, about-info .btn', {delay: 600, origin: 'left'});
 ScrollReveal().reveal('.home .info .btn', {delay: 700, origin: 'bottom'});
 ScrollReveal().reveal('.media-icons i, .contact-left li', {delay: 500, origin: 'left', interval: 200});
 ScrollReveal().reveal('.home-img, .about-img', {delay: 500, origin: 'bottom'});
 ScrollReveal().reveal('.about .description, .contact-right', {delay: 600, origin: 'right'});
 ScrollReveal().reveal('.about .professional-list li', {delay: 500, origin: 'right', interval: 200});
 ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', {delay: 700, origin: 'left'});
 ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', {delay: 800, origin: 'bottom', interval: 200});
 ScrollReveal().reveal('footer .group', {delay: 500, origin: 'top'});