// model
let app = document.getElementById('app')
let backColor = document.body.style;
let xCoordinate;
let yCoordinate;
let green = 255;
let blue = 255;
let win = false;

// view
randomizeLocation();
updateView();
function updateView() {
    if (win != false) {
        app.innerHTML = /*HTML*/`
            <h1>Du vant!</h1>
        `;
    } else {
        createGameHtml();
    }
}

function createGameHtml() {
    app.innerHTML = /*HTML*/ `
    <h1 style="text-align: center;"
    >Tampen brenner</h1>
    <div
    style="background-Color: rgb(255, ${green}, ${blue});
    width: 200px;
    height: 100px;"
    ></div>

    <div id="pointOfInterest"
    style="
    left: ${xCoordinate}%;
    top: ${yCoordinate}%;"
    onmousemove="gettingClose('win')";
    ></div>

    <div id="innerBox"
    style="
    left: ${xCoordinate}%;
    top: ${yCoordinate}%"
    onmouseenter="gettingClose('closer')";
    ></div>
    
    <div id="outerBox"
    style="
    left: ${xCoordinate}%;
    top: ${yCoordinate}%"
    onmouseenter="gettingClose('close')";
    ></div>

    <div id="farBox"
    style="
    left: ${xCoordinate}%;
    top: ${yCoordinate}%"
    onmouseenter="gettingClose('far')";
    ></div>
`;
}

// controller
function randomizeLocation() {
    xCoordinate = Math.floor((Math.random() * 97) + 1)
    yCoordinate = Math.floor((Math.random() * 96) + 1)
}

function gettingClose(howClose) {
    if (howClose == 'win') {
        document.body.style.backgroundColor = 'red';
        win = true;
        updateView();
    } else if (howClose == 'closer') {
        green = 80;
        blue = 80;
    } else if (howClose == 'close') {
        green = 200;
        blue = 200;
    } else if (howClose == 'far') {
        green = 255;
        blue = 255;
    }
    updateView();
}