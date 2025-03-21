const languageBtn = document.getElementById('language-btn');
const hiText = document.querySelector('.Hi');
const bioText = document.querySelector('.bio');
let isEnglish = true;

const translations = {
    en: {
        hi: 'Hi, I\'m rev\\x',
        bio: 'trying to program, trying to get better / / /',
        btn: 'en'
    },
    ru: {
        hi: 'Привет, я rev\\x',
        bio: 'пытаюсь программировать, пытаюсь стать лучше / / /',
        btn: 'ru'
    }
};

let isAnimating = false;

languageBtn.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    const newLang = isEnglish ? 'ru' : 'en';
    
    const handleFadeOut = () => {
        hiText.textContent = translations[newLang].hi;
        bioText.textContent = translations[newLang].bio;
        languageBtn.textContent = newLang;

        hiText.removeEventListener('animationend', handleFadeOut);
        bioText.removeEventListener('animationend', handleFadeOut);
        hiText.classList.remove('fade-out');
        bioText.classList.remove('fade-out');

        hiText.classList.add('fade-in');
        bioText.classList.add('fade-in');
    };

    hiText.classList.add('fade-out');
    bioText.classList.add('fade-out');

    hiText.addEventListener('animationend', handleFadeOut);
    bioText.addEventListener('animationend', handleFadeOut);

    const handleFadeIn = () => {
        hiText.classList.remove('fade-in');
        bioText.classList.remove('fade-in');
        isAnimating = false;
        isEnglish = !isEnglish;
    };

    hiText.addEventListener('animationend', handleFadeIn);
    bioText.addEventListener('animationend', handleFadeIn);
});
