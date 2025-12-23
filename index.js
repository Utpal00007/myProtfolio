// Initialize feather icons
feather.replace();

// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");

    const icon = this.querySelector("i");
    if (menu.classList.contains("hidden")) {
      icon.setAttribute("data-feather", "menu");
    } else {
      icon.setAttribute("data-feather", "x");
    }
    feather.replace();
  });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu if open
    if (!document.getElementById("mobile-menu").classList.contains("hidden")) {
      document.getElementById("mobile-menu").classList.add("hidden");
      document
        .getElementById("mobile-menu-button")
        .querySelector("i")
        .setAttribute("data-feather", "menu");
      feather.replace();
    }
  });
});

// Animate skill bars when they come into view
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach((bar) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // The width is already set inline, the transition will handle the animation
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(bar);
  });
};

// Initialize animation on load
document.addEventListener("DOMContentLoaded", animateSkillBars);
