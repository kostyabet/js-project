/*
Условие:

Реализуйте интерфейс:
Список дел
Кнопка "Добавить задачу"
Кнопка "Удалить" около каждой задачи


Поведение:

При нажатии на "Добавить" в список добавляется новая задача с текстом вида: Задача #N (номер по счёту).
При нажатии на "Удалить" — удаляется выбранная задача из списка.
Если список пустой, то выводить соответствующее сообщение.

 *
 */


class TodoList {
    #count = 0;
    #tasks = [];

    constructor() {
        this.#count = 0;
        this.#tasks = [];
        this.render();
    }

    render() {
        const tasksContainer = document.getElementById('tasks');
        tasksContainer.innerHTML = `
                    ${this.renderButton('addTask', 'Добавить задачу')}
                    ${this.renderTasks()}
                `;
        this.addEventListeners();
    }

    renderTasks() {
        if (this.#tasks.length === 0) {
            return '<div>Список задач пуст</div>';
        }

        return `
            <section>
                ${this.#tasks.map(task => `
                    <div>
                        <span>Задача #${task.id}</span>
                        ${this.renderButton('deleteTask', 'Удалить', task.id)}
                    </div>
                `).join('')}
            </section>
        `;
    }

    renderButton(methodName, text, taskId = null) {
        return `<button class="todo-btn" data-method="${methodName}" data-task-id="${taskId}">${text}</button>`;
    }

    addEventListeners() {
        const buttons = document.querySelectorAll('.todo-btn');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const methodName = e.target.dataset.method;
                const taskId = e.target.dataset.taskId;

                if (methodName === 'addTask') {
                    this.addTask();
                } else if (methodName === 'deleteTask' && taskId !== null) {
                    this.deleteTask(parseInt(taskId));
                }
            });
        });
    }

    addTask() {
        this.#tasks.push({
            id: this.#count++
        });
        this.render();
    }

    deleteTask(id) {
        this.#tasks = this.#tasks.filter(task => task.id !== id);
        this.render();
    }
}

const todoList = new TodoList();