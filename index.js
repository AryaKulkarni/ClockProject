timer();

function timer(){
 var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
var sec = currentTime.getSeconds()
if (minutes < 10){
    minutes = "0" + minutes
}
if (sec < 10){
    sec = "0" + sec
}
let am_or_pm
if(hours > 11){
    am_or_pm = "PM";
    hours-=12
} else {
   am_or_pm = "AM";
}
let timeString = hours + ":" + minutes + ":" + sec +" "+am_or_pm;
 document.querySelector("h1").textContent = timeString;
 setTimeout(timer,1000);
}