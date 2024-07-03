window.onload = function() {
    var video = document.getElementById("myvideo");
    var play = document.getElementById("play");
    var progress = document.getElementById("progress");
    var bar = document.getElementById("bar");
    var control = document.getElementById("control");
    var sound = document.getElementById("sound");
    var full = document.getElementById("full");

    control.onmousedown = function(e) {
        video.pause();
        var curTime;
        document.onmousemove = function(e) {
            var lef = e.clientX - progress.parentNode.offsetLeft - progress.offsetLeft;
            if (lef <= 0)
                lef = 0;
            else if (lef >= progress.offsetWidth)
                lef = progress.offsetWidth;
            
            bar.style.width = lef + "px";
            var scales = lef / progress.offsetWidth;
            curTime = video.duration * scales;
        }

        document.onmouseup = function(e) {
            video.currentTime = curTime;
            video.play();
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

    video.ontimeupdate = function() {
        var curTime = video.currentTime;
        var countTime = video.duration;
        var scale = curTime / countTime;

        bar.style.width = progress.offsetWidth * scale + "px";
        control.style.left = progress.offsetWidth * scale + "px";
    }

    play.onclick = function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    sound.onclick = function() {
        if (video.muted) {
            video.muted = false;
            sound.className = "soundoff";
        } else {
            video.muted = true;
            sound.className = "sound";
        }
    }

    full.onclick = function() {
        video.webkitRequestFullScreen();
    }
}