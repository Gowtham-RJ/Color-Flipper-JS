
const click = document.querySelector(".click");
const simple = document.querySelector(".simple");
const hex = document.querySelector(".hex");
const span = document.querySelector("span");
const main = document.querySelector("main");
const gradi = document.querySelector(".gradi")
let type = "s";
let fun;

simple.addEventListener("click", function () {
    type = "s";
})
hex.addEventListener("click", function () {
    type = "h"; 
})
gradi.addEventListener("click", function () {
    type = "g"; 
})

click.addEventListener("click", function () {
    if (type === "s") {
        let randomColor = generateRandomColor();
        main.classList.remove("main1")
        main.style.background = randomColor;
        document.querySelector("h1").innerHTML = "Background Color : <span>" + randomColor + "</span>"
        // span.textContent = randomColor;
    }
    else if (type === "h") {
        let hexColor = generateHexColor();
        main.classList.remove("main1")
        main.style.background = hexColor;
        document.querySelector("h1").innerHTML = "Background Color : <span>" + hexColor + "</span>"
        // span.textContent = hexColor;
    }
    else {
        let gradiColor = generateGradientColor();
        main.style.background = gradiColor
        document.querySelector("h1").innerHTML = "Background : <span>" + gradiColor + "</span>"
        // span.textContent = gradiColor;
    }
})

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function generateHexColor () {
    random = Math.floor(Math.random() * 9999999);
    randomHex = random.toString(16).toUpperCase();
    console.log(randomHex);
    return "#" + randomHex;
}

function generateGradientColor () {
    random_deg = Math.floor(Math.random() * 360)
    gradient = "linear-gradient(" +random_deg +"deg, "+generateHexColor()+", "+generateHexColor()+", "+generateHexColor()+")"
    return gradient
}
