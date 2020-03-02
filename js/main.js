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
    <div>${days} ◆<span>Days</span></div>
    <div>${hours} ◆<span>Hours</span></div>
    <div>${mins} ◆<span>Minutes</span></div>
    <div>${secs} ◆<span>Seconds</span></div>
    `
}, 1000);