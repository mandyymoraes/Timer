
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
const display = document.getElementById("display")
const start_btn = document.getElementById("start");
const reset_btn = document.getElementById("reset");
const pause_btn = document.getElementById("pause");
start_btn.addEventListener("click", () => {
    if (interval) {
        clearInterval(interval)
    }
    interval = setInterval(timer, 1000)
})
pause_btn.addEventListener("click", () => {
    clearInterval(interval);
})
reset_btn.addEventListener("click", () => {
    clearInterval(interval);
    seconds = 0;
    display.innerText = `00:00:00`;

})
function timer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            hours++;
        }
    }
    s_value = seconds < 10 ? '0' + seconds : seconds;
    m_value = minutes < 10 ? '0' + minutes : minutes;
    h_value = hours < 10 ? '0' + hours : hours
    display.innerText = `${h_value}:${m_value}:${s_value}`
}

