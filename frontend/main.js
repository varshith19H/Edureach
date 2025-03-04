document.addEventListener("DOMContentLoaded", () => {
    // Fade-in Sections on Scroll
    const fadeIns = document.querySelectorAll(".fade-in");

    const appearOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    fadeIns.forEach((section) => {
        appearOnScroll.observe(section);
    });

    // Testimonial Auto-Switch
    let stories = document.querySelectorAll(".story-card");
    let currentStory = 0;

    function showNextStory() {
        stories[currentStory].classList.remove("active");
        currentStory = (currentStory + 1) % stories.length;
        stories[currentStory].classList.add("active");
    }

    setInterval(showNextStory, 5000); // Switch stories every 5 seconds

    // Smooth Scroll for CTA button
    document.querySelector(".cta-button").addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector("#footer").scrollIntoView({ behavior: "smooth" });
    });
});
