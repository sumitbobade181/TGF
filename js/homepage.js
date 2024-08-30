// Adding click event listeners for each sidebar button

document.getElementById('upload-audio').addEventListener('click', function() {
    function navigateToUploadAudio() {
        window.location.href = 'uploadaudiop.html';
});

document.getElementById('upload-video').addEventListener('click', function() {
    alert('Upload Video clicked');
    // Add your functionality here
});

document.getElementById('upload-device-ip').addEventListener('click', function() {
    alert('Upload Device IP clicked');
    // Add your functionality here
});

document.getElementById('audio-player').addEventListener('click', function() {
    alert('Audio Player clicked');
    // Add your functionality here
});

document.getElementById('video-player').addEventListener('click', function() {
    alert('Video Player clicked');
    // Add your functionality here
});

document.getElementById('devices-ip').addEventListener('click', function() {
    alert('Devices (IP) clicked');
    // Add your functionality here
});

document.getElementById('write-blog').addEventListener('click', function() {
    window.location.href = 'file.html\blogp\blogp.html';
});
