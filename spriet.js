const result = document.getElementById('result');

function appendValue(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        appendValue(key);          // Numbers and decimal
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendValue(key);          // Operators
    } else if (key === 'Enter') {
        calculateResult();         // Enter key = Calculate
    } else if (key === 'Backspace') {
        deleteLast();              // Backspace = Delete last
    } else if (key.toLowerCase() === 'c') {
        clearResult();             // 'C' key = Clear
    }
});
