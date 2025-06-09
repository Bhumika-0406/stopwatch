let timer, times = 0, running = false;
const display = document.getElementById("display");

const formatTime = ms => {
    let h = Math.floor(ms / 3600000);
   
    let m = Math.floor((ms % 3600000) / 60000);

    let s = Math.floor((ms % 60000) / 1000);


    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    return h + ":" + m + ":" + s;
};
const updateDisplay = () => display.textContent = formatTime(times);

document.getElementById("start").onclick = () => {
    if (!running) {
        running = true;
        const start = Date.now() - times;
        timer = setInterval(() => {
            times = Date.now() - start;
            updateDisplay();
        }, 100);
    }
};

document.getElementById("pause").onclick = () => {
    if (running) {
        running = false;
        clearInterval(timer);
    }
};

document.getElementById("restart").onclick = () => {
    running = false;
    clearInterval(timer);
    times = 0;
    updateDisplay();
};
