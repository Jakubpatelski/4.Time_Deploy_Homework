
const timeLeft = document.getElementById('time-left')
const timeLeft2 = document.getElementById('time-left2')
const timeLeft3 = document.getElementById('time-left3')

const championship = new Date('March 19 1922 00:00:00')

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId

function countDown(){
    const today = new Date()
    console.log(today)
    const timeSpan = championship - today
    console.log(timeSpan)

const days = Math.floor(Math.abs(timeSpan) / day)
const hours = Math.floor((Math.abs(timeSpan) % day) / hour)
const minutes = Math.floor((Math.abs(timeSpan) % hour) / minute)
const seconds = Math.floor((Math.abs(timeSpan) % minute) / second)
timeLeft2.innerText = `${days} days ${hours} hours ${minutes} minutes  ${seconds} seconds`
   

}

 timerId = setInterval(countDown, second)

 //Set Time 
setInterval(function() {
    let date = new Date();
    timeLeft.innerText = date.toLocaleString(); //Method
    timeLeft3.innerText = date.toLocaleTimeString()

}, 1000);