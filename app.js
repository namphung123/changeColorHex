const value = document.querySelector("#hex-value");
const button = document.querySelector("#btn");
const hexValue = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const body = document.querySelector("body");

button.addEventListener("click", changeHex);

function changeHex() {

    let hex = "#";
    // #F8F8FF
    for(let i = 0;i < 6; i++) {
        const index = Math.floor(Math.random() * hexValue.length);
        hex+=hexValue[index];
    }

    value.textContent = hex;
    body.style.background = hex;
}
