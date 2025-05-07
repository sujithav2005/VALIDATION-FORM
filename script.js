document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');

    // Regular expressions for validation
    var usernamePattern = /^[a-zA-Z0-9]{3,}$/; // Alphanumeric, at least 3 characters
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Valid email format
    var phoneNumberPattern = /^[0-9]+$/; // Only digits allowed
    var passwordPattern = /^.{6,}$/; // Password must be at least 6 characters long

    // Function to show error message next to the input
    function showError(input, message) {
        const errorElement = input.parentElement.querySelector('.error-message');
        errorElement.innerText = message;
        errorElement.style.display = 'block';
    }

    // Function to clear error message
    function clearError(input) {
        const errorElement = input.parentElement.querySelector('.error-message');
        errorElement.innerText = '';
        errorElement.style.display = 'none';
    }

    // Function to validate login form
    function validateLoginForm() {
        var isValid = true;
        var loginUsername = document.getElementById('loginUsername');
        var loginPassword = document.getElementById('loginPassword');

        clearError(loginUsername);
        clearError(loginPassword);

        if (loginUsername.value === "") {
            showError(loginUsername, "Username cannot be empty");
            isValid = false;
        } else if (!usernamePattern.test(loginUsername.value)) {
            showError(loginUsername, "Username must contain only letters and numbers, and be at least 3 characters long.");
            isValid = false;
        }

        if (loginPassword.value === "") {
            showError(loginPassword, "Password cannot be empty");
            isValid = false;
        } else if (!passwordPattern.test(loginPassword.value)) {
            showError(loginPassword, "Password must be at least 6 characters long.");
            isValid = false;
        }

        return isValid;
    }

    // Function to validate signup form
    function validateSignupForm() {
        var isValid = true;
        var username = document.getElementById('username');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        var dob = document.getElementById('dob');
        var password = document.getElementById('password');
        var confirmPassword = document.getElementById('confirmPassword');

        clearError(username);
        clearError(email);
        clearError(phone);
        clearError(dob);
        clearError(password);
        clearError(confirmPassword);

        if (username.value === "") {
            showError(username, "Username cannot be empty");
            isValid = false;
        } else if (!usernamePattern.test(username.value)) {
            showError(username, "Username must contain only letters and numbers, and be at least 3 characters long.");
            isValid = false;
        }

        if (email.value === "") {
            showError(email, "Email cannot be empty");
            isValid = false;
        } else if (!emailPattern.test(email.value)) {
            showError(email, "Please enter a valid email address.");
            isValid = false;
        }

        if (phone.value === "") {
            showError(phone, "Phone number cannot be empty");
            isValid = false;
        } else if (!phoneNumberPattern.test(phone.value)) {
            showError(phone, "Phone number can only contain digits.");
            isValid = false;
        }

        if (dob.value === "") {
            showError(dob, "Date of birth cannot be empty");
            isValid = false;
        }

        if (password.value === "") {
            showError(password, "Password cannot be empty");
            isValid = false;
        } else if (!passwordPattern.test(password.value)) {
            showError(password, "Password must be at least 6 characters long.");
            isValid = false;
        }

        if (confirmPassword.value === "") {
            showError(confirmPassword, "Please confirm your password");
            isValid = false;
        } else if (password.value !== confirmPassword.value) {
            showError(confirmPassword, "Passwords must be the same.");
            isValid = false;
        }

        return isValid;
    }

    // Add event listener for login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            if (validateLoginForm()) {
                alert("Login form submitted successfully");
                loginForm.reset();
            }
        });
    }

    // Add event listener for signup form submission
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            if (validateSignupForm()) {
                alert("Signup form submitted successfully");
                signupForm.reset();
            }
        });
    }
});
