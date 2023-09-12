// Define the special keys
const specialKeys = [
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
    'Print Screen', 'Scroll Lock', 'Pause',
    'Insert', 'Home', 'Page Up', 'Delete', 'End', 'Page Down',
    'Num Lock', '/', '*', '-',
    'Tab', 'Caps Lock', 'Shift', 'Ctrl', 'Alt', 'Space', 'Enter', 'Backspace',
];

// Get the keyboard element
const keyboard = document.querySelector('.keyboard');

// Get the reaction text element
const reactionText = document.getElementById('reaction-text');

// Function to create a key element
function createKey(keyValue, special = false) {
    const keyElement = document.createElement('div');
    keyElement.classList.add('key');
    if (special) {
        keyElement.classList.add('special');
    }
    keyElement.textContent = keyValue;
    keyElement.id = `key-${keyValue.replace(' ', '-')}`; // Handle spaces in key names
    return keyElement;
}

// Function to create a row of keys
function createKeyRow(keys, specialRow = false) {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    if (specialRow) {
        rowElement.classList.add('special-row');
    }
    keys.forEach((keyValue) => {
        const keyElement = createKey(keyValue, specialKeys.includes(keyValue));
        rowElement.appendChild(keyElement);
    });
    return rowElement;
}

// Generate the keyboard layout
const keyboardLayout = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'],
];

keyboardLayout.forEach((rowKeys) => {
    const keyRow = createKeyRow(rowKeys);
    keyboard.appendChild(keyRow);
});

// Generate special keys
const specialKeysRow = createKeyRow(specialKeys, true);
keyboard.appendChild(specialKeysRow);

// Add a click event listener to each key
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('click', () => {
        keys.forEach((k) => k.classList.remove('active'));
        key.classList.add('active');
        reactionText.textContent = `You pressed: ${key.textContent}`;
    });
});

// Add a keydown event listener to the document to capture physical keyboard presses
document.addEventListener('keydown', (event) => {
    const pressedKey = document.getElementById(`key-${event.key.toUpperCase().replace(' ', '-')}`);
    if (pressedKey) {
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
        });
        pressedKey.dispatchEvent(clickEvent);
    }
});
