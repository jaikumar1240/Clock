displayLoading()
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let secondBlink = document.querySelector('.second')
let second = 0
setInterval(() => {
    setTimeout(() => {
        secondBlink.style.visibility = 'hidden'
    }, 300);
    var currentDate = new Date()
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    // var currentSecond = currentDate.getSeconds();
    secondBlink.style.visibility = 'visible'
    hour.innerText = currentHour;
    if (currentMinute < 10) minute.innerText = '0' + currentMinute;
    else minute.innerText = currentMinute;
    hideLoading()
}, 1000);

function goBack() {
    window.location.replace('/Clock/allClock/allClock.html')
}