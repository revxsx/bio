const languageBtn = document.getElementById('language-btn');
const hiText = document.querySelector('.Hi');
const bioText = document.querySelector('.bio');

let isEnglish = true;

const translations = {
    en: {
        hi: 'Hi, I\'m revexed',
        bio: 'trying to program, trying to get better / / /',
        btn: 'en'
    },
    ru: {
        hi: 'Привет, я revexed',
        bio: 'пытаюсь программировать, пытаюсь стать лучше / / /',
        btn: 'ru'
    }
};

let isAnimating = false;

languageBtn.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    const newLang = isEnglish ? 'ru' : 'en';

    hiText.classList.add('fade-out');
    bioText.classList.add('fade-out');

    hiText.addEventListener('animationend', () => {
        hiText.textContent = translations[newLang].hi;
        bioText.textContent = translations[newLang].bio;
        languageBtn.textContent = newLang;

        hiText.classList.remove('fade-out');
        bioText.classList.remove('fade-out');
        hiText.classList.add('fade-in');
        bioText.classList.add('fade-in');

        hiText.addEventListener('animationend', () => {
            hiText.classList.remove('fade-in');
            bioText.classList.remove('fade-in');
            isAnimating = false;
        }, { once: true });
    }, { once: true });

    isEnglish = !isEnglish;
});
