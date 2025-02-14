document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Form Validation (If adding a contact form in the future)
    const emailField = document.getElementById("email");
    if (emailField) {
        emailField.addEventListener("blur", function () {
            const email = emailField.value;
            if (!email.includes("@")) {
                alert("Please enter a valid email address.");
            }
        });
    }
});
