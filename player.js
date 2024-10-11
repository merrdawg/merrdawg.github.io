const audioPlayer = document.getElementById('audio-player');
        const playBtn = document.getElementById('play-btn');
        const pauseBtn = document.getElementById('pause-btn');
        const progressBar = document.getElementById('progress-bar');

        // Play the audio
        playBtn.addEventListener('click', () => {
            audioPlayer.play();
        });

        // Pause the audio
        pauseBtn.addEventListener('click', () => {
            audioPlayer.pause();
        });

        //Bootstrap spinner
        audioPlayer.addEventListener('loadstart', () => {
            spinner.style.display = 'block';
        });

        //Hide spinner
        audioPlayer.addEventListener('canplay', () => {
            spinner.style.display = 'none';
        });