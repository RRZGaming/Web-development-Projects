document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const fileInput = document.getElementById('fileInput');
    const audio = document.getElementById('audio');
    const songInfo = document.getElementById('songInfo');
    const photo = document.getElementById('photo');
    const volumeControl = document.getElementById('volumeControl');

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            audio.src = fileURL;
            audio.play();

            // Hide the file input and show "Now Playing"
            fileInput.classList.add('hidden');
            const nowPlayingBtn = document.createElement('button');
            nowPlayingBtn.textContent = 'Now Playing';
            nowPlayingBtn.classList.add('now-playing');
            fileInput.parentNode.appendChild(nowPlayingBtn);

            songInfo.innerHTML = `
                <h2>${file.name}</h2>
            `;

            // Optionally set album art (if you have an image)
            // photo.src = 'path_to_image'; 
        }
    });

    playBtn.addEventListener('click', () => {
        if (audio.src) {
            audio.play();
        }
    });

    pauseBtn.addEventListener('click', () => {
        if (audio.src) {
            audio.pause();
            fileInput.classList.remove('hidden');
            const nowPlayingBtn = document.querySelector('.now-playing');
            if (nowPlayingBtn) nowPlayingBtn.remove();
        }
    });

    // Volume control
    volumeControl.addEventListener('input', () => {
        audio.volume = volumeControl.value;
    });

    // Reset button state when playback ends
    audio.addEventListener('ended', () => {
        fileInput.classList.remove('hidden');
        const nowPlayingBtn = document.querySelector('.now-playing');
        if (nowPlayingBtn) nowPlayingBtn.remove();
    });
});
