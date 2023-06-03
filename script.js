const msgStatus = document.querySelector('.msg-status')
console.log(document.location.search);
if(document.location.search === '?mail_status=sent'){
    msgStatus.classList.add('success')
    msgStatus.textContent = 'Propozycja wysłana!'
    setTimeout(() => {
        msgStatus.classList.remove('success')
    }, 3000);
}
if(document.location.search === '?mail_status=error'){
    msgStatus.classList.add('error')
    msgStatus.textContent = 'Propozycja nie została wysłana!'
    setTimeout(() => {
        msgStatus.classList.remove('error')
    }, 3000);
}
setInterval(()=>{
const time = document.querySelector('#time');
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
time.textContent = hours + ":" + minutes + ":" + seconds;
});





