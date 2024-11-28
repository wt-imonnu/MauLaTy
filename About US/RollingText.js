const words = ["Developers", "Motion Designers", "Video Editors", "Content Writers", "Marketing Strategists"];
let wordIndex = 0;
let charIndex = 0;
const typingText = document.getElementById('typing-text');
const totalDuration = 2000; // Total duration for typing and erasing each word in milliseconds

function type() {
    const typingSpeed = totalDuration / (words[wordIndex].length * 2); // Adjust speed based on word length
    if (charIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, 500);
    }
}

function erase() {
    const erasingSpeed = totalDuration / (words[wordIndex].length * 2); // Adjust speed based on word length
    if (charIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);
});