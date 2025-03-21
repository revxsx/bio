const languageBtn = document.getElementById('language-btn');
const hiText = document.querySelector('.Hi');
const bioText = document.querySelector('.bio');

let isEnglish = true;

languageBtn.addEventListener('click', () => {

    hiText.classList.add('fade-out');
    bioText.classList.add('fade-out');


    setTimeout(() => {
        if (isEnglish) {

            hiText.textContent = 'Привет, я rev\\x';
            bioText.textContent = 'пытаюсь программировать, пытаюсь стать лучше / / /';
            languageBtn.textContent = 'ru';
        } else {

            hiText.textContent = 'Hi, I\'m rev\\x';
            bioText.textContent = 'trying to program, trying to get better / / /';
            languageBtn.textContent = 'en';
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
    }, 500); // Задержка соответствует длительности анимации
});
