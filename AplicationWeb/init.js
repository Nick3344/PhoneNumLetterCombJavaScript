function createMenuScreen() {
    // Main container
    const CONTAINER = document.querySelector('#container');

    const menu = createElement('div', 'menu');
    
    const heading = createElement('h1', 'mainTitle');
    heading.textContent = 'Phone Keypad Letter Combinations';

    const digitButtonsContainer = createElement('div', 'digit-buttons-container');

    for (let digit = 2; digit <= 9; digit++) {
        const digitButton = createElement('button', `digit-${digit}`);
        digitButton.dataset.digit = digit;
        digitButton.textContent = digit;
        
        const lettersDisplay = createElement('div', `letters-${digit}`);
        lettersDisplay.classList.add('digit-letters');
        lettersDisplay.textContent = DIGIT_MAP[digit].join(' ');
        
        digitButton.appendChild(lettersDisplay);
        digitButtonsContainer.appendChild(digitButton);
    }

    const inputDisplay = createElement('input', 'input-display');
    inputDisplay.id = 'input-display';
    inputDisplay.setAttribute('readonly', true);
    inputDisplay.placeholder = 'Selected Digits';

    const actionButtons = createElement('div', 'action-buttons');
    
    const clearButton = createElement('button', 'clearButton');
    clearButton.id = 'clearButton';
    clearButton.textContent = 'Clear';
    
    const enterButton = createElement('button', 'enterButton');
    enterButton.id = 'enterButton';
    enterButton.textContent = 'Enter';

    actionButtons.appendChild(clearButton);
    actionButtons.appendChild(enterButton);

    // Results display
    const resultsDisplay = createElement('div', 'results-display');
    resultsDisplay.id = 'results-display';

    menu.appendChild(heading);
    menu.appendChild(digitButtonsContainer);
    menu.appendChild(inputDisplay);
    menu.appendChild(actionButtons);
    menu.appendChild(resultsDisplay);

    CONTAINER.appendChild(menu);
}

document.addEventListener('DOMContentLoaded', createMenuScreen);