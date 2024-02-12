const dispaly = document.getElementById("display");

function appendtoDispaly(input) {
    dispaly.value += input;
}
function clearDispaly() {
    dispaly.value = "";
}
function calculate() {
    try {
        dispaly.value = eval(dispaly.value);
    }
    catch (error) {
        dispaly.value = "Error";
    }
}