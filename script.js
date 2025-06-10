let timer, times = 0, running = false;
const display = document.getElementById("display");


const formatTime = (ms) => {
    let minutes = Math.floor(ms / 60000); 
    let seconds = Math.floor((ms % 60000) / 1000); 
    let milliseconds = ms % 1000;

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
     if (milliseconds < 10) milliseconds = "0" + milliseconds;

    return minutes+ ":" + seconds + ":" + milliseconds ;
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
