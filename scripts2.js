document.querySelector('.show-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = this.textContent === '👁️' ? '🙈' : '👁️';
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform login action here
    alert('Logged in successfully!');
});
