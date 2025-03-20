const tomButton = document.getElementById('tom');
const tinkButton = document.getElementById('tink');
const snareButton = document.getElementById('snare');
const rideButton = document.getElementById('ride');
const openhatButton = document.getElementById('openhat');
const kickButton = document.getElementById('kick');
const hihatButton = document.getElementById('hihat');
const clapButton = document.getElementById('clap');
const boomButton = document.getElementById('boom');
// Mouse click olduğunda çalışan kısım
const tomSound = document.getElementById('tom-sound');
tomButton.addEventListener('click', function(){
    tomSound.play();
})
const tinkSound = document.getElementById('tink-sound');
tinkButton.addEventListener('click', function(){
    tinkSound.play();
})
const snareSound = document.getElementById('snare-sound');
snareButton.addEventListener('click', function(){
    snareSound.play();
})
const rideSound = document.getElementById('ride-sound');
rideButton.addEventListener('click', function(){
    rideSound.play();
})
const openhatSound = document.getElementById('openhat-sound');
openhatButton.addEventListener('click', function(){
    openhatSound.play();
})
const kickSound = document.getElementById('kick-sound');
kickButton.addEventListener('click', function(){
    kickSound.play();
})
const hihatSound = document.getElementById('hihat-sound');
hihatButton.addEventListener('click', function(){
    hihatSound.play();
})
const clapSound = document.getElementById('clap-sound');
clapButton.addEventListener('click', function(){
    clapSound.play();
})
const boomSound = document.getElementById('boom-sound');
boomButton.addEventListener('click', function(){
    boomSound.play();
})
// Klavye girişi ile çalışan kısım
document.addEventListener('keydown', function(event){
    if (event.key === 'a' || event.key === 'A') {
        tomSound.play();
    }
});
document.addEventListener('keydown', function(event){
    if (event.key === 's' || event.key === 'S') {
        tinkSound.play();
    }
});
document.addEventListener('keydown', function(event){
    if (event.key === 'd' || event.key === 'D') {
        snareSound.play();
    }
});
document.addEventListener('keydown', function(event){
    if (event.key === 'f' || event.key === 'F') {
        rideSound.play();
    }
});
document.addEventListener('keydown', function(event){
    if (event.key === 'g' || event.key === 'G') {
        openhatSound.play();
    }
});
document.addEventListener('keydown', function(event){
    if (event.key === 'h' || event.key === 'H') {
        kickSound.play();
    }
});
document.addEventListener('keydown', function(event){
    if (event.key === 'j' || event.key === 'J') {
        hihatSound.play();
    }
});
document.addEventListener('keydown', function(event){
    if (event.key === 'k' || event.key === 'K') {
        clapSound.play();
    }
});
document.addEventListener('keydown', function(event){
    if (event.key === 'l' || event.key === 'L') {
        boomSound.play();
    }
});
