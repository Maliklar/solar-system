// speed of light is 300000 kilometer per second 
// 300000 / 1000 = 300 pxel per second;
// 300 p/s to  p/ms = 3 p/ms


let CURRENT_SPEED = 3;

let sun = document.querySelector(".sun");
let sunDist = document.getElementById("sun-dist");
let sunTime = document.getElementById("sun-time");



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

let engineAudio = document.getElementById("engine-audio");

let earthX = earth.offsetLeft;
let interval = null;
let speed = CURRENT_SPEED;
let curr = 0;


let engineFire = document.querySelector(".mo-fire");
let playerContainer = document.querySelector(".player-container");

// setInterval(() => {
//     let distance = Math.abs(earthX - curr);
//     let minutes = Math.round((distance / speed) / 100 / 60);
//     distanceToNext.innerHTML = minutes + "m";
// }, 1);


let progress = document.querySelector(".bottom-map-progress");


document.addEventListener('keydown', (event) => {
    clearInterval(interval);
    speed = CURRENT_SPEED;
    if (event.keyCode == 65) {
        engineAudio.play();
        engineFire.style.visibility = "visible";
        playerContainer.style.transform = "rotate(180deg)";
        playerContainer.style.webkitTransform = "rotate(180deg)";
        playerContainer.style.mozTransform = "rotate(180deg)";
        playerContainer.style.animation = "movementLeft 10s alternate-reverse infinite"

        interval = setInterval(() => {
            curr = window.pageXOffset;
            window.scroll(curr - speed, 0);
            updateMetricsTable();
            backgroundAnimationLeft();

        }, 1);
    } else if (event.keyCode == 68) {
        interval = setInterval(() => {
            engineAudio.play();

            engineFire.style.visibility = "visible";
            playerContainer.style.webkitTransform = "rotate(0deg)";
            playerContainer.style.mozTransform = "rotate(0deg)";
            playerContainer.style.transform = "rotate(0deg)";
            playerContainer.style.animation = "movement 10s alternate-reverse infinite"

            curr = window.pageXOffset;
            window.scroll(curr + speed, 0);
            updateMetricsTable();
            backgroundAnimationRight();
        }, 1);
    }
    console.log(playerContainer.style.transform);

});

document.addEventListener('keyup', () => {
    clearInterval(interval);
    engineAudio.pause();

    speed = 0;
    backgroundAnimationHold();
    engineFire.style.visibility = "hidden";
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


let speedSetter = 0;

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


let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");

function backgroundAnimationLeft() {
    layer1.style.animation = "sf-fly-by-1-left 5s linear infinite";
    layer2.style.animation = "sf-fly-by-2-left 5s linear infinite";
    layer3.style.animation = "sf-fly-by-3-left 5s linear infinite";

    // layer1.style.animationDirection = "forward";
    // layer2.style.animationDirection = "reverse";
    // layer3.style.animationDirection = "reverse";
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

    // layer1.style.animationPlayState = "paused";
    layer2.style.animationPlayState = "paused";
    layer3.style.animationPlayState = "paused";

    layer1.style.animationDuration = "10s";
    layer2.style.animationDuration = "10s";
    layer3.style.animationDuration = "10s"


}