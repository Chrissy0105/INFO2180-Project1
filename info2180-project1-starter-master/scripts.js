document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletter-form");
    const emailInput = document.querySelector(".newsletter input[type='email']");
    const messageDiv = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // Empty field
        if (email === "") {
            messageDiv.textContent = "Please enter an email address.";
            messageDiv.style.color = "red";
            return;
        }

        // Invalid email format
        if (!email.match(emailPattern)) {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "red";
            return;
        }

        // Success
        messageDiv.textContent = `Thank you! Your email address <${email}> has been added to our mailing list!`;
        messageDiv.style.color = "green";
        emailInput.value = "";
    });
});
