document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    var bioContent = document.getElementById('bio-content');
    var backgroundMusic = document.getElementById('background-music');

    var playPauseBtn = document.getElementById('play-pause-btn');
    var timeline = document.getElementById('timeline');
    var volumeControl = document.getElementById('volume');
    var timer = document.getElementById('timer');

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        bioContent.style.display = 'block';
        backgroundMusic.play();
        playPauseBtn.src = 'pause-icon.png';
    });

    playPauseBtn.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            playPauseBtn.src = 'pause-icon.png';
        } else {
            backgroundMusic.pause();
            playPauseBtn.src = 'play-icon.png';
        }
    });

    backgroundMusic.addEventListener('timeupdate', function() {
        var currentTime = backgroundMusic.currentTime;
        var duration = backgroundMusic.duration;
        var value = (currentTime / duration) * 100;
        timeline.value = value;
        
        var formatTime = function(seconds) {
            var minutes = Math.floor(seconds / 60);
            var seconds = Math.floor(seconds % 60);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        };

        timer.textContent = formatTime(currentTime) + " / " + formatTime(duration);
    });

    timeline.addEventListener('input', function() {
        var time = (timeline.value / 100) * backgroundMusic.duration;
        backgroundMusic.currentTime = time;
    });

    backgroundMusic.volume = 0.05;
});






