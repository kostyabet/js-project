/*
Условие:

Создайте HTML-форму:
Поле "Имя"
Поле "Email"
Текстовое поле "Сообщение"
Кнопка "Отправить"


Поведение:

При нажатии на кнопку "Отправить":
Проверяется, что все поля заполнены.
Если какое-то поле пустое — вывести alert или текстовое сообщение под формой с ошибкой.
Если все поля заполнены — вывести любое сообщение и очистить поля.

*/

const container = document.getElementById("container");

const form = document.createElement("form");
form.setAttribute("method", "POST");
form.setAttribute("action", "/");

const name = document.createElement("input");
name.setAttribute("type", "text");
name.setAttribute("placeholder", "Name");
name.setAttribute("name", "name");

const email = document.createElement("input");
email.setAttribute("type", "email");
email.setAttribute("placeholder", "Email");
email.setAttribute("name", "email");

const message = document.createElement("textarea");
message.setAttribute("type", "text");
message.setAttribute("placeholder", "Message");
message.setAttribute("name", "message");

const sendButton = document.createElement("button");
sendButton.setAttribute("type", "submit");
sendButton.textContent = "Send";

sendButton.addEventListener("click", () => {
    const isValid =
        name.value.length > 0 &&
        email.value.length > 0 &&
        message.value.length > 0;
    if (isValid) {
        name.value = "";
        email.value = "";
        message.value = "";
        alert("All is OK!")
    } else {
        alert("Please enter some data in each field!");
    }
})

form.append(name, email, message, sendButton);
container.append(form);