document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');

    // Example: Load audio dynamically from backend
    fetch('api/audio/file/path')
        .then(response => response.json())
        .then(data => {
            audioPlayer.src = data.filePath; // Replace with actual API response structure
        })
        .catch(error => console.error('Error loading audio:', error));
});

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
// Script to handle file uploads and update sidebar
$(document).ready(function() {
    $('#audioUploadForm').submit(function(e) {
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: formData,
            success: function(data) {
                $('#audioMenu').append('<span class="badge badge-pill badge-info ml-2">1</span>');
            },
            cache: false,
            contentType: false,
            processData: false
        });
    });

    $('#videoUploadForm').submit(function(e) {
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: formData,
            success: function(data) {
                $('#videoMenu').append('<span class="badge badge-pill badge-info ml-2">1</span>');
            },
            cache: false,
            contentType: false,
            processData: false
        });
    });
});
