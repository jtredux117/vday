let noButton = document.getElementById('noButton');
let yesButton = document.getElementById('yesButton');
let noClickCount = 0;
let noButtonSize = 1; // Start with the original size

function moveButton() {
    let randomX = Math.random() * 400 - 50;  // Random X movement
    let randomY = Math.random() * 400 - 50;  // Random Y movement
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}


function growYesButton() {
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize + 80}px`;  // Grow button size
}

function shrinkNoButton() {
    // Decrease the font size by 10% every time it's clicked after reset
    noButtonSize *= 0.9;  // Shrink by 10%
    noButton.style.transform = `scale(${noButtonSize})`;  // Update size based on the shrink factor
}

noButton.addEventListener('click', () => {
    if (noClickCount < 5) {
        moveButton();
        noClickCount++;
    } else {
        growYesButton();  // Start growing the "Yes" button
    }
});

// Shrink the "No" button after every subsequent click once it has been reset
noButton.addEventListener('click', () => {
    if (noClickCount >= 5) {
        shrinkNoButton();  // Shrink the button after it's reset
    }
});

yesButton.addEventListener('click', () => {
    window.location.href = 'newPage.html';
});