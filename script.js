const sec = document.querySelector(".small_katte");
const min = document.querySelector(".big_katte");

const hour = document.querySelector(".med_katte");



setInterval(() => {
    const seconds = new Date().getSeconds();
    sec.style.transform = "rotate(" + (seconds + 1) * 6 + "deg)";
}, 1000);

setInterval(() => {
    const mins = new Date().getMinutes()
    min.style.transform = "rotate(" + (mins + 1) * 6 + "deg)";

}, 1000);
setInterval(() => {  
    const hours = new Date().getHours();
    hour.style.transform = "rotate(" + (hours + 1)  * 12 + "deg)";
}, 1000);

