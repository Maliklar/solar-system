// speed of light is 300000 kilometer per second 
// 300000 / 1000 = 300 pxel per second;
// 300 p/s to  p/ms = 3 p/ms


let CURRENT_SPEED = 3;

let sun = document.querySelector(".sun");
let sunDist = document.getElementById("sun-dist");
let sunTime = document.getElementById("sun-time");


let currentSpeedElement = document.getElementById("current-speed");


let mercury = document.querySelector(".mercury");
let mercuryDist = document.getElementById("mercury-dist");
let mercuryTime = document.getElementById("mercury-time");

let venus = document.querySelector(".venus");
let venusDist = document.getElementById("venus-dist");
let venusTime = document.getElementById("venus-time");

let mars = document.querySelector(".mars");
let marsDist = document.getElementById("mars-dist");
let marsTime = document.getElementById("mars-time");

let earth = document.querySelector(".earth");
let earthDist = document.getElementById("earth-dist");
let earthTime = document.getElementById("earth-time");

let jupiter = document.querySelector(".jupiter");
let jupiterDist = document.getElementById("jupiter-dist");
let jupiterTime = document.getElementById("jupiter-time");

let saturn = document.querySelector(".saturn");
let saturnDist = document.getElementById("saturn-dist");
let saturnTime = document.getElementById("saturn-time");

let uranus = document.querySelector(".uranus");
let uranusDist = document.getElementById("uranus-dist");
let uranusTime = document.getElementById("uranus-time");

let neptune = document.querySelector(".neptune");
let neptuneDist = document.getElementById("neptune-dist");
let neptuneTime = document.getElementById("neptune-time");


let distanceToNext = document.getElementById('distance-tonext');

let earthX = earth.offsetLeft;
let interval = null;
let speed = CURRENT_SPEED;
let curr = 0;

setInterval(() => {
    let distance = Math.abs(earthX - curr);
    let minutes = Math.round((distance / speed) / 100 / 60);
    distanceToNext.innerHTML = minutes + "m";
}, 1);


let progress = document.querySelector(".bottom-map-progress");


document.addEventListener('keydown', (event) => {
    clearInterval(interval);
    speed = CURRENT_SPEED;
    if (event.keyCode == 65) {
        interval = setInterval(() => {
            curr = window.pageXOffset;
            window.scroll(curr - speed, 0);
            updateMetricsTable();

        }, 1);
    } else if (event.keyCode == 68) {
        interval = setInterval(() => {
            curr = window.pageXOffset;
            window.scroll(curr + speed, 0);
            updateMetricsTable();


        }, 1);
    }

});

document.addEventListener('keyup', () => {
    clearInterval(interval);
    speed = 0;
    console.log("released")

});


function updateMetricsTable() {
    let mercD = Math.abs(curr - mercury.offsetLeft);
    mercuryDist.innerHTML = mercD;
    mercuryTime.innerHTML = Math.round((mercD / speed) / 100 / 60);

    let venD = Math.abs(curr - venus.offsetLeft);
    venusDist.innerHTML = venD;
    venusTime.innerHTML = Math.round((venD / speed) / 100 / 60);

    let earD = Math.abs(curr - earth.offsetLeft);
    earthDist.innerHTML = earD;
    earthTime.innerHTML = Math.round((earD / speed) / 100 / 60);

    let marD = Math.abs(curr - mars.offsetLeft);
    marsDist.innerHTML = marD;
    marsTime.innerHTML = Math.round((marD / speed) / 100 / 60);

    let jupD = Math.abs(curr - jupiter.offsetLeft);
    jupiterDist.innerHTML = jupD;
    jupiterTime.innerHTML = Math.round((jupD / speed) / 100 / 60);

    let satD = Math.abs(curr - saturn.offsetLeft);
    saturnDist.innerHTML = satD;
    saturnTime.innerHTML = Math.round((satD / speed) / 100 / 60);

    let urnD = Math.abs(curr - uranus.offsetLeft);
    uranusDist.innerHTML = urnD;
    uranusTime.innerHTML = Math.round((urnD / speed) / 100 / 60);

    let nepD = Math.abs(curr - neptune.offsetLeft);
    neptuneDist.innerHTML = nepD;
    neptuneTime.innerHTML = Math.round((nepD / speed) / 100 / 60);

    let sunD = Math.abs(curr - sun.offsetLeft);
    sunDist.innerHTML = sunD;
    sunTime.innerHTML = Math.round((sunD / speed) / 100 / 60);

    progress.style.width = ((curr / document.body.clientWidth) * 100) + "%";

}

function updateSpeed() {
    CURRENT_SPEED = CURRENT_SPEED + 3;
    currentSpeedElement.innerHTML = CURRENT_SPEED / 3;
}

let speedSetter = 0;

function speedInput(val) {
    speedSetter = val;
    CURRENT_SPEED = 0;
    for (let i = 0; i < val; i++) {
        CURRENT_SPEED = CURRENT_SPEED + 3;
    }
    currentSpeedElement.innerHTML = CURRENT_SPEED / 3;
}