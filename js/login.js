document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // You can implement your login logic here
        console.log("Email:", email);
        console.log("Password:", password);
    });
});