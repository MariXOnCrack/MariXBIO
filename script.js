document.addEventListener('DOMContentLoaded', function() {
    // Get the overlay, bio content, and background music elements
    var overlay = document.getElementById('overlay');
    var bioContent = document.getElementById('bio-content');
    var backgroundMusic = document.getElementById('background-music');

    // Get the play/pause button, timeline, volume control, and timer elements
    var playPauseBtn = document.getElementById('play-pause-btn');
    var timeline = document.getElementById('timeline');
    var volumeControl = document.getElementById('volume');
    var timer = document.getElementById('timer');

    // Add a click event listener to the overlay
    overlay.addEventListener('click', function() {
        // Hide the overlay
        overlay.style.display = 'none';
        // Show the bio content
        bioContent.style.display = 'block';
        // Play the background music
        backgroundMusic.play();
        // Change the button to the pause image
        playPauseBtn.src = 'pause-icon.png';
    });

    // Toggle play/pause when the button is clicked
    playPauseBtn.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            playPauseBtn.src = 'pause-icon.png';
        } else {
            backgroundMusic.pause();
            playPauseBtn.src = 'play-icon.png';
        }
    });

    // Update the timeline and timer as the music plays
    backgroundMusic.addEventListener('timeupdate', function() {
        var currentTime = backgroundMusic.currentTime;
        var duration = backgroundMusic.duration;
        var value = (currentTime / duration) * 100;
        timeline.value = value;
        
        // Format time as mm:ss
        var formatTime = function(seconds) {
            var minutes = Math.floor(seconds / 60);
            var seconds = Math.floor(seconds % 60);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        };

        timer.textContent = formatTime(currentTime) + " / " + formatTime(duration);
    });

    // Seek through the song when the timeline is adjusted
    timeline.addEventListener('input', function() {
        var time = (timeline.value / 100) * backgroundMusic.duration;
        backgroundMusic.currentTime = time;
    });

    backgroundMusic.volume = 0.05;
});






