// speed of light is 300000 kilometer per second 
// 300000 / 1000 = 300 pxel per second;
// 300 p/s to  p/ms = 3 p/ms


// Planets HTML elements
const sun = document.querySelector(".sun");
const sunDist = document.getElementById("sun-dist");
const sunTime = document.getElementById("sun-time");

const mercury = document.querySelector(".mercury");
const mercuryDist = document.getElementById("mercury-dist");
const mercuryTime = document.getElementById("mercury-time");

const venus = document.querySelector(".venus");
const venusDist = document.getElementById("venus-dist");
const venusTime = document.getElementById("venus-time");

const mars = document.querySelector(".mars");
const marsDist = document.getElementById("mars-dist");
const marsTime = document.getElementById("mars-time");

const earth = document.querySelector(".earth");
const earthDist = document.getElementById("earth-dist");
const earthTime = document.getElementById("earth-time");

const jupiter = document.querySelector(".jupiter");
const jupiterDist = document.getElementById("jupiter-dist");
const jupiterTime = document.getElementById("jupiter-time");

const saturn = document.querySelector(".saturn");
const saturnDist = document.getElementById("saturn-dist");
const saturnTime = document.getElementById("saturn-time");

const uranus = document.querySelector(".uranus");
const uranusDist = document.getElementById("uranus-dist");
const uranusTime = document.getElementById("uranus-time");

const neptune = document.querySelector(".neptune");
const neptuneDist = document.getElementById("neptune-dist");
const neptuneTime = document.getElementById("neptune-time");

// Player HTML Elements
const engineAudio = document.getElementById("engine-audio");
const engineFire = document.querySelector(".mo-fire");
const playerContainer = document.querySelector(".player-container");
const progress = document.querySelector(".bottom-map-progress");

// Background HTML Elements
const layer1 = document.getElementById("layer1");
const layer2 = document.getElementById("layer2");
const layer3 = document.getElementById("layer3");
const backgroundAudio = document.getElementById("background-ambience");
let CURRENT_SPEED = 3;
let interval = null;
let speed = CURRENT_SPEED;
let currentPosition = 0;
let speedSetter = 0;

// Player Controls
document.addEventListener('keydown', (event) => {
    clearInterval(interval);
    backgroundAudio.play();

    speed = CURRENT_SPEED;
    if (event.keyCode == 65) {
        engineAudio.play();
        engineFire.style.visibility = "visible";
        playerContainer.style.animation = "movementLeft 10s alternate-reverse infinite";
        interval = setInterval(() => {
            currentPosition = window.pageXOffset;
            window.scroll(currentPosition - speed, 0);
            updateMetricsTable();
            backgroundAnimationLeft();

        }, 1);
    } else if (event.keyCode == 68) {
        interval = setInterval(() => {
            engineAudio.play();
            engineFire.style.visibility = "visible";
            playerContainer.style.animation = "movement 10s alternate-reverse infinite";

            currentPosition = window.pageXOffset;
            window.scroll(currentPosition + speed, 0);
            updateMetricsTable();
            backgroundAnimationRight();
        }, 1);
    }
});
document.addEventListener('keyup', () => {
    speed = 0;
    clearInterval(interval);
    engineAudio.pause();
    backgroundAnimationHold();
    engineFire.style.visibility = "hidden";
    updateMetricsTable();
});

// Helper functions
function updateMetricsTable() {
    let mercD = Math.abs(currentPosition - mercury.offsetLeft);
    mercuryDist.innerHTML = mercD;
    mercuryTime.innerHTML = Math.round((mercD / speed) / 100 / 60);

    let venD = Math.abs(currentPosition - venus.offsetLeft);
    venusDist.innerHTML = venD;
    venusTime.innerHTML = Math.round((venD / speed) / 100 / 60);

    let earD = Math.abs(currentPosition - earth.offsetLeft);
    earthDist.innerHTML = earD;
    earthTime.innerHTML = Math.round((earD / speed) / 100 / 60);

    let marD = Math.abs(currentPosition - mars.offsetLeft);
    marsDist.innerHTML = marD;
    marsTime.innerHTML = Math.round((marD / speed) / 100 / 60);

    let jupD = Math.abs(currentPosition - jupiter.offsetLeft);
    jupiterDist.innerHTML = jupD;
    jupiterTime.innerHTML = Math.round((jupD / speed) / 100 / 60);

    let satD = Math.abs(currentPosition - saturn.offsetLeft);
    saturnDist.innerHTML = satD;
    saturnTime.innerHTML = Math.round((satD / speed) / 100 / 60);

    let urnD = Math.abs(currentPosition - uranus.offsetLeft);
    uranusDist.innerHTML = urnD;
    uranusTime.innerHTML = Math.round((urnD / speed) / 100 / 60);

    let nepD = Math.abs(currentPosition - neptune.offsetLeft);
    neptuneDist.innerHTML = nepD;
    neptuneTime.innerHTML = Math.round((nepD / speed) / 100 / 60);

    let sunD = Math.abs(currentPosition - sun.offsetLeft);
    sunDist.innerHTML = sunD;
    sunTime.innerHTML = Math.round((sunD / speed) / 100 / 60);

    progress.style.width = ((currentPosition / document.body.clientWidth) * 100) + "%";
}



function speedInput(ele) {
    let val = ele.value;
    if (val.length > 2 || val.length < 1) {
        speedSetter = 1;
        ele.value = ele.value.slice(0, ele.maxLength);
    } else {
        speedSetter = val;
        CURRENT_SPEED = 0;
        for (let i = 0; i < val; i++) {
            CURRENT_SPEED = CURRENT_SPEED + 3;
        }
    }
}

function backgroundAnimationLeft() {
    layer1.style.animation = "sf-fly-by-1-left 5s linear infinite";
    layer2.style.animation = "sf-fly-by-2-left 5s linear infinite";
    layer3.style.animation = "sf-fly-by-3-left 5s linear infinite";
}

function backgroundAnimationRight() {
    layer1.style.animation = "sf-fly-by-1-left 5s linear reverse infinite";
    layer2.style.animation = "sf-fly-by-2-left 5s linear reverse infinite";
    layer3.style.animation = "sf-fly-by-3-left 5s linear reverse infinite";
}

function backgroundAnimationHold() {
    layer1.style.animation = "sf-fly-by-1 5s linear infinite";
    layer2.style.animation = "sf-fly-by-2 5s linear infinite";
    layer3.style.animation = "sf-fly-by-3 5s linear infinite";

    layer1.style.animationDuration = "10s";
    layer2.style.animationDuration = "10s";
    layer3.style.animationDuration = "10s"

}


plaentsSize();

// temp option
function plaentsSize() {
    earth.style.height = "500px";
    earth.style.width = "500px";
    earth.style.top = "50px";

    mercury.style.height = "500px";
    mercury.style.width = "500px";
    mercury.style.top = "50px";

    venus.style.height = "500px";
    venus.style.width = "500px";
    venus.style.top = "50px";

    mars.style.height = "500px";
    mars.style.width = "500px";
    mars.style.top = "50px";

    uranus.style.height = "500px";
    uranus.style.width = "500px";
    uranus.style.top = "50px";

    neptune.style.height = "500px";
    neptune.style.width = "500px";
    neptune.style.top = "50px";
}