var circle = document.getElementById('circle');
var sectorIndex = document.getElementById('sectorIndex');
var button = document.getElementById('mainButton');

function start() {
    button.disabled = true;
    let degreeCurrent = 0;
    let degreeMax = getRandomInt(500, 1000);
    
    let timer = setInterval(function() {
        degreeCurrent = degreeCurrent + 1;

        if (degreeCurrent >= degreeMax) {
            clearInterval(timer);
            button.disabled = false;
            sectorIndex.innerHTML = calculateSector(degreeCurrent);
            togglePopup();
            return;
        }

        spinCircle(degreeCurrent);
    }, 1);
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function calculateSector(deg) {
    return Math.trunc(((deg + 30) % 360) / 60) + 1;
};

function spinCircle(deg) {
    circle.style.transform = `rotate(${-deg}deg)`;
};

function togglePopup() {
    var popup = document.getElementById('popup');
    popup.classList.toggle('visible');
};
