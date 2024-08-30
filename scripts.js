$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Perform your login validation here (usually via AJAX or form submission)

        // For demonstration, simulate successful login
        var email = $('#email').val();
        var password = $('#pwd').val();

        // Example: Check if credentials are valid (this should be done server-side)
        if (email === 'user@example.com' && password === 'password') {
            // Redirect to the main page
            window.location.href = 'index.html';
        } else {
            // Handle invalid credentials (show error message, etc.)
            alert('Invalid credentials. Please try again.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    feather.replace();
});
