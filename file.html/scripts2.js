document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role');
    const title = document.getElementById('login-title');

    // Adjust the title based on the role parameter
    if (role === 'admin') {
        title.textContent = 'Admin Login';
    } else if (role === 'customer') {
        title.textContent = 'Customer Login';
    }
});

document.querySelector('.show-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = this.textContent === '👁️' ? '🙈' : '👁️';
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform login action here (e.g., authentication)
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role');
    const redirectTo = 'index2.html';  // Redirect to this page after login

    // Simulate a successful login and redirect
    setTimeout(() => {
        window.location.href = redirectTo;
    }, 500);  // Adjust delay if necessary
});
