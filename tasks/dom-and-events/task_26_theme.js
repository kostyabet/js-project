/*
Условие:

Создайте кнопку "Сменить тему":
При нажатии изменяется тема сайта:
Добавляется класс dark к <body> (или убирается — в зависимости от текущей темы).
Сохраняется текущая тема в localStorage (theme: 'light' | 'dark').
При загрузке страницы проверяется сохраненная тема и применяется нужный класс.


Поведение:

Кнопка может менять текст: "Тёмная тема" / "Светлая тема"
Фон и текст сайта должны менять стили в зависимости от класса (можно добавить простые CSS-стили для светлой и тёмной темы)

*/

const container = document.getElementById('container');
let theme = localStorage.getItem('theme') || 'light';

const button = document.createElement('button');
renderButtonContent();
renderTheme();
function renderButtonContent() {
    button.textContent = theme === 'light' ? 'Светлая тема' : 'Тёмная тема';
}
function renderTheme() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(theme === 'light' ? 'dark' : 'light');
    body.classList.add(theme === 'light' ? 'light' : 'dark');
}
button.addEventListener('click', (e) => {
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    renderButtonContent();
    renderTheme();
})

container.appendChild(button);