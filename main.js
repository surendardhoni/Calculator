
function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').innerText;
    document.getElementById('display').innerText = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function calculateResult() {
    let currentDisplay = document.getElementById('display').innerText;
    try {
        let result = eval(currentDisplay);
        document.getElementById('display').innerText = result;
    }
     catch {
        document.getElementById('display').innerText = 'Error';
    }
}