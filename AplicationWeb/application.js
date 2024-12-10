function menuscreen() {
    const digitButtons = document.querySelectorAll('[data-digit]');
    const inputDisplay = document.getElementById('input-display');
    const clearButton = document.getElementById('clearButton');
    const enterButton = document.getElementById('enterButton');
    const resultsDisplay = document.getElementById('results-display');

    const selectedDigits = [];

    digitButtons.forEach(button => {
        button.addEventListener('click', () => {
            const digit = button.dataset.digit;
            
            if (selectedDigits.length < 4) {
                selectedDigits.push(digit);
                inputDisplay.value = selectedDigits.join('');
                button.classList.add('selected');
            }
        });
    });

    clearButton.addEventListener('click', () => {
        selectedDigits.length = 0;
        inputDisplay.value = '';
        
        digitButtons.forEach(button => {
            button.classList.remove('selected');
        });
    });

    function generateLetterCombinations(digits) {
        if (digits.length === 0) return [];

        // Recursive backtracking function
        function backtrack(combination, nextDigits) {
            // Base case: if no more digits, adds current combination
            if (nextDigits.length === 0) {
                result.push(combination);
                return;
            }

            const currentDigit = nextDigits[0];
            const letters = DIGIT_MAP[currentDigit];

            for (let letter of letters) {
                backtrack(combination + letter, nextDigits.slice(1));
            }
        }

        const result = [];
        backtrack('', digits);
        return result;
    }

    // Enter button handler
    enterButton.addEventListener('click', () => {
        const combinations = generateLetterCombinations(selectedDigits);
        
        resultsDisplay.innerHTML = '';

        // Display results
        if (combinations.length === 0) {
            resultsDisplay.textContent = 'No combinations found';
            return;
        }

        const resultsList = document.createElement('ul');
        resultsList.id = 'results-list';
        
        combinations.forEach(combo => {
            const listItem = document.createElement('li');
            listItem.textContent = combo;
            resultsList.appendChild(listItem);
        });

        resultsDisplay.appendChild(resultsList);
    });
}
