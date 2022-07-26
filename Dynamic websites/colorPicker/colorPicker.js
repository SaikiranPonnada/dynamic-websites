let colorPickerElement = document.getElementById("colorPicker");
let selectedColorElement = document.getElementById("selectedColor");


function changeToGrey() {
    colorPickerElement.style.backgroundColor = "#e0e0e0";
    selectedColorElement.textContent = "#e0e0e0";
}

function changeToGreen() {
    colorPickerElement.style.backgroundColor = "#6fcf97";
    selectedColorElement.textContent = "#6fcf97";
}

function changeToBlue() {
    colorPickerElement.style.backgroundColor = "#56ccf2";
    selectedColorElement.textContent = "#56ccf2";
}

function changeToPurple() {
    colorPickerElement.style.backgroundColor = "#bb6bd9";
    selectedColorElement.textContent = "#bb6bd9";
}