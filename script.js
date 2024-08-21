document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    function validateEmail(email) {
        // Basic email validation pattern
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function validatePassword(password) {
        // Password must be at least 8 characters and contain at least one number and one letter
        const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return pattern.test(password);
    }

    function validateForm(event) {
        event.preventDefault();

        let isValid = true;

        // Email validation
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Invalid email format.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Password validation
        if (!validatePassword(passwordInput.value)) {
            passwordError.textContent = 'Password must be at least 8 characters long and contain at least one number and one letter.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        // Confirm password validation
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
        } else {
            confirmPasswordError.textContent = '';
        }

        if (isValid) {
            alert('Form submitted successfully!');
            // You can submit the form or perform further actions here
        }
    }

    form.addEventListener('submit', validateForm);
});
