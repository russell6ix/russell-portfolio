
// Setup and start animation! 
  let typed = new Typed('#typed', {
    strings: ['Frontend developer', 'Backend Developer','Web Designer'],
    typeSpeed: 50,
    loop: true,
  });

const count = document.querySelector(".countings")
  // Facts counter
  $('.countings').counterUp({
    delay: 5,
    time: 2000
});

// $(document).ready(function () {
//     $('.countings').counterUp({
//         delay: 5,
//         time: 2000
//     });
// });

// go to top 
const togtop = () =>
    document.querySelector(".scroll-up").style.
    display = window.scrollY >= 800 ? "flex" :
    "none" ;

    window.addEventListener("scroll", togtop);
    window.addEventListener("resize", togtop);

    // aos
// AOS.init();

AOS.init({
    once: true,
    // offset: 200,
    // duration: 600,
});

// Initialize all popovers
document.addEventListener('DOMContentLoaded', function () {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(function (popoverTriggerEl) {
        new bootstrap.Popover(popoverTriggerEl);
    });
});