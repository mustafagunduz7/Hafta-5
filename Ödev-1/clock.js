//Kullanıcıdan isim alma
let userName = prompt('Adınızı giriniz:');
if(!userName || userName.trim() === ''){
    userName = 'Ziyaretçi';
}
document.getElementById('myName').textContent = userName;

//Saat kısmı
function showTime(){
    const now = new Date();
    let hours = now.getHours ();
    let minutes = now.getMinutes ();
    let seconds = now.getSeconds ();

//Tek basamaklı sayılar için başına 0 ekleme
hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

const timeString = `${hours}:${minutes}:${seconds}`;

//'myClock' id'li div'e zamanı yazdırma
document.getElementById("myClock").textContent = timeString;
setTimeout(showTime, 1000);
} 
showTime();


