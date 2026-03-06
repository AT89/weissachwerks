document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the 'fade-in' class
    const fadeElements = document.querySelectorAll('.fade-in');

    // Create the Intersection Observer
    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Add the 'visible' class to trigger the CSS transition
                entry.target.classList.add('visible');
                // Stop observing the element once it has appeared
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // Triggers when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    // Attach observer to each element
    fadeElements.forEach(element => {
        appearanceObserver.observe(element);
    });
});