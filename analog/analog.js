displayLoading()
var currentDate = new Date()
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();
var currentSecond = currentDate.getSeconds();

const secondNeedle = document.querySelector('.second');
const minuteNeedle = document.querySelector('.minute');
const hourNeedle = document.querySelector('.hour')
let second = 1;
secondNeedle.style.transform = `rotate(${6 * (currentSecond + second) + 90}deg)`
minuteNeedle.style.transform = `rotate(${6 * (currentMinute + second * 1 / 60) + 90}deg)`
second = second + 1;
hourNeedle.style.transform = `rotate(${30 * currentHour + second * 36 / 4320 + 90}deg)`
setInterval(() => {
    secondNeedle.style.transform = `rotate(${6 * (currentSecond + second) + 90}deg)`
    minuteNeedle.style.transform = `rotate(${6 * (currentMinute + second * 1 / 60) + 90}deg)`
    second = second + 1;
    hourNeedle.style.transform = `rotate(${30 * currentHour + second * 36 / 4320 + 90}deg)`
    hideLoading()
}, 1000);

function goBack() {
    window.location.replace('/Clock/allClock/allClock.html');
}
