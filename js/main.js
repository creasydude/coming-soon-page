let countdown = document.querySelector('.section')

let launchDate = new Date('March 31 , 2020 13:00:00').getTime();

const intvl = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now ;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const mins = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60))
    const secs = Math.floor(distance % (1000 * 60) / 1000)
   
    countdown.innerHTML = `
    <div id="days">${days} ◆<span>Days</span></div>
    <div id="hours">${hours} ◆<span>Hours</span></div>
    <div id="mins">${mins} ◆<span>Minutes</span></div>
    <div id="secs">${secs} ◆<span>Seconds</span></div>
    `
}, 1000);