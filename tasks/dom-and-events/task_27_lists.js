/*
Условие:

Есть список блоков (например, карточки задач), каждый с двумя кнопками:
"Вверх"
"Вниз"


Поведение:

При нажатии "Вверх" текущий элемент перемещается выше в списке (если он не первый).
При нажатии "Вниз" — ниже (если не последний).


*/

const container = document.getElementById('container');

const ul = document.createElement('ul');
container.appendChild(ul);

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    const newCard = document.createElement('section');
    newCard.setAttribute("data-id", i.toString());

    // title
    const title = document.createElement('h2');
    title.textContent = i.toString();

    // Button "Вверх"
    const upButton = document.createElement('button');
    upButton.textContent = "Вверх";
    upButton.addEventListener('click', () => {
        if (li.previousElementSibling) {
            ul.insertBefore(li, li.previousElementSibling);
        }
    });

    // Button "Вниз"
    const downButton = document.createElement('button');
    downButton.textContent = "Вниз";
    downButton.addEventListener('click', () => {
        if (li.nextElementSibling) {
            ul.insertBefore(li.nextElementSibling, li);
        }
    });

    newCard.append(title, upButton, downButton);
    li.appendChild(newCard);
    ul.appendChild(li);
}