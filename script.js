let startTime = 0;
let elapsedTime = 0;
let running = false;
let timer;

function startStop() {
    if (running) {
        // If stopwatch is running, stop it
        clearInterval(timer);
        running = false;
        document.querySelector("button").textContent = "Start";
    } else {
        // If stopwatch is stopped, start it
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 1000);
        running = true;
        document.querySelector("button").textContent = "Stop";
    }
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    
    document.getElementById("time").textContent = 
        formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(unit) {
    return unit < 10 ? "0" + unit : unit;
}

function reset() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    document.getElementById("time").textContent = "00:00:00";
    document.querySelector("button").textContent = "Start";
}