function getBrowserLanguage() {
    const userLanguage = navigator.language || navigator.userLanguage;
    return userLanguage.split('-')[0];
}

function setInitialLanguage() {
    const browserLanguage = getBrowserLanguage();
    const supportedLanguages = ['ru', 'be', 'kk', 'uk'];

    const hiText = document.querySelector('.Hi');
    const bioText = document.querySelector('.bio');
    const languageBtn = document.getElementById('language-btn');
    const infoBtn = document.querySelector('.infobtn');

    if (supportedLanguages.includes(browserLanguage)) {

        hiText.textContent = 'Привет, я rev\\x';
        bioText.textContent = 'пытаюсь программировать, пытаюсь стать лучше / / /';
        languageBtn.textContent = 'RU';
        infoBtn.href = 'https://telegra.ph/YA-03-21-5';
        return false;
    } else {

        hiText.textContent = 'Hi, I\'m rev\\x';
        bioText.textContent = 'trying to program, trying to get better / / /';
        languageBtn.textContent = 'EN';
        infoBtn.href = 'https://telegra.ph/Im-03-21-3';
        return true;
    }
}

const languageBtn = document.getElementById('language-btn');
const hiText = document.querySelector('.Hi');
const bioText = document.querySelector('.bio');
const infoBtn = document.querySelector('.infobtn');

let isEnglish = setInitialLanguage();

languageBtn.addEventListener('click', () => {
    hiText.classList.add('fade-out');
    bioText.classList.add('fade-out');

    setTimeout(() => {
        if (isEnglish) {

            hiText.textContent = 'Привет, я rev\\x';
            bioText.textContent = 'пытаюсь программировать, пытаюсь стать лучше / / /';
            languageBtn.textContent = 'RU';
            infoBtn.href = 'https://telegra.ph/YA-03-21-5';
        } else {

            hiText.textContent = 'Hi, I\'m rev\\x';
            bioText.textContent = 'trying to program, trying to get better / / /';
            languageBtn.textContent = 'EN';
            infoBtn.href = 'https://telegra.ph/Im-03-21-3';
        }

        hiText.classList.remove('fade-out');
        bioText.classList.remove('fade-out');

        hiText.style.animation = 'none';
        bioText.style.animation = 'none';

        void hiText.offsetWidth;
        void bioText.offsetWidth;

        hiText.style.animation = 'fadeIn 0.5s ease forwards';
        bioText.style.animation = 'fadeIn 0.5s ease forwards';

        isEnglish = !isEnglish;
    }, 500);
});

document.addEventListener('copy', (event) => {
    event.preventDefault();
});

document.addEventListener('cut', (event) => {
    event.preventDefault();
});

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    alert('пiдарасiк')
});
