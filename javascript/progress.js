var i = 0;

function html() {
    if (i == 0) {
        i = 0;
        var progress = document.getElementById("progressBar");
        var width = 0;
        var interval = setInterval(frame, 10);

        function frame() {
            if (width >= 90) {
                clearInterval(interval);
                i = 0;
            } else {
                width++;
                progress.style.width = width + '%';
                progress.innerHTML = width + '%';
            }
        }
    }
}

function scss() {
    if (i == 0) {
        i = 0;
        var progress = document.getElementById("progressBar");
        var width = 0;
        var interval = setInterval(frame, 10);

        function frame() {
            if (width >= 70) {
                clearInterval(interval);
                i = 0;
            } else {
                width++;
                progress.style.width = width + '%';
                progress.innerHTML = width + '%';
            }
        }
    }
}

function js() {
    if (i == 0) {
        i = 0;
        var progress = document.getElementById("progressBar");
        var width = 0;
        var interval = setInterval(frame, 10);

        function frame() {
            if (width >= 50) {
                clearInterval(interval);
                i = 0;
            } else {
                width++;
                progress.style.width = width + '%';
                progress.innerHTML = width + '%';
            }
        }
    }
}