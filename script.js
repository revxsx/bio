const languageBtn = document.getElementById('language-btn');
const hiText = document.querySelector('.Hi');
const bioText = document.querySelector('.bio');

let isEnglish = true;

languageBtn.addEventListener('click', () => {
    // Добавляем анимацию исчезновения
    hiText.classList.add('fade-out');
    bioText.classList.add('fade-out');

    // Ждём завершения анимации исчезновения
    setTimeout(() => {
        if (isEnglish) {
            // Переключаем на русский
            hiText.textContent = 'Привет, я rev\\x';
            bioText.textContent = 'пытаюсь программировать, пытаюсь стать лучше / / /';
            languageBtn.textContent = 'RU';
        } else {
            // Переключаем на английский
            hiText.textContent = 'Hi, I\'m rev\\x';
            bioText.textContent = 'trying to program, trying to get better / / /';
            languageBtn.textContent = 'EN';
        }

        // Убираем класс анимации исчезновения
        hiText.classList.remove('fade-out');
        bioText.classList.remove('fade-out');

        // Сбрасываем анимацию появления
        hiText.style.animation = 'none';
        bioText.style.animation = 'none';
        // Принудительно перезапускаем reflow
        void hiText.offsetWidth;
        void bioText.offsetWidth;

        // Добавляем анимацию появления
        hiText.style.animation = 'fadeIn 0.5s ease forwards';
        bioText.style.animation = 'fadeIn 0.5s ease forwards';

        // Меняем состояние
        isEnglish = !isEnglish;
    }, 500); // Задержка соответствует длительности анимации
});