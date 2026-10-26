
const display = document.getElementById("display");

function appendToDisplay(value) {
    if (display.value === "Error") {
        display.value = "";
    }

    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function calculate() {
    try {
        const expression = display.value;

        // Allow only numbers and calculator operators
        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            display.value = "Error";
            return;
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = String(
            Number(result.toPrecision(12))
        );
    } catch {
        display.value = "Error";
    }
}
