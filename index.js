// calculator program


const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input
}

// if (display !== "Error") {
//     display = document.getElementById("display");
// } else {
//     return clearDisplay()
// }

function clearDisplay(){
    display.value=""
}

function calculate(){
    try {
        display.value = eval(display.value)  
    } catch (error) {
        display.value="Error"
    }
}