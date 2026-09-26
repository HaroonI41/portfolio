const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const themeBtn = document.getElementById("themeBtn");

// Mobile Menu
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Close Mobile Menu After Clicking Link
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});

// Dark / Light Mode
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "☀";
    } else {
        themeBtn.textContent = "☾";
    }

});