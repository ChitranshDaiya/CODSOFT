// Loading Animation Logic
window.addEventListener("load", () => {
    setTimeout(() => {
    const loading = document.getElementById("loading");
    loading.style.opacity = "0";
    loading.style.visibility = "hidden";
  }, 3500); // Matches the CSS animation-delay
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector(".menu ul");

menuBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// Smooth Scroll Navigation
const navItems = document.querySelectorAll(".menu li");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    const section = document.getElementById(targetId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        if (window.innerWidth <= 768) {
        menu.style.display = "none";
        }
    }
    });
});

// Theme Toggle Logic
const themeToggle = document.getElementById("themeToggle");
const prefersLight = localStorage.getItem("theme") === "light";

if (prefersLight) {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌞";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    themeToggle.textContent = isLight ? "🌞" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});
