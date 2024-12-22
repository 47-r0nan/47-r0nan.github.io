const words = [
    "Python Engineer",
    "Cloud Computing Enthusiast",
    "Lego Builder",
    "Pokémon Trainer"
];
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 3000;

let currentWordIndex = 0;
let charIndex = 0;
let isTyping = true;

const typewriterElement = document.getElementById('typewriter');
const cursorElement = document.getElementById('cursor');

function typeWords() {
  const currentWord = words[currentWordIndex];
  cursorElement.classList.remove('flash');
  if (isTyping) {
    if (charIndex < currentWord.length) {
      typewriterElement.textContent += currentWord[charIndex];
      charIndex++;
      setTimeout(typeWords, typingSpeed);
    } else {
      isTyping = false;
      cursorElement.classList.add('flash');
      setTimeout(typeWords, delayBetweenWords);
    }
  } else {
    if (charIndex > 0) {
      typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWords, erasingSpeed);
    } else {
      isTyping = true;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(typeWords, typingSpeed);
    }
  }
}
typeWords();

Array.from(document.getElementsByClassName('nav-item')).forEach((item) => {
  item.addEventListener('click', () => {
    const activeItem = document.querySelector('.nav-item .active');
    activeItem.classList.remove('active');
    item.children[0].classList.add('active');
  });
});
