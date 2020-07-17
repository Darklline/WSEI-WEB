const todoForm = document.querySelector('.todoForm');
const list = document.querySelector('.todoList');
const todoInput = document.querySelector('.todoInput');

function addNewTask(e) {
	e.preventDefault();

	const inputValue = todoInput.value;
	if (inputValue === '') return;
	const li = createNewListItem(inputValue);
	list.appendChild(li);

	this.reset();
}

function removeTask(e) {
	if (e.target.classList.contains('delete')) {
		const parentNode = e.target.parentNode;
		parentNode.remove();
	} else return;
}

function createNewListItem(initialValue) {
	const li = document.createElement('li');
	li.classList.add('todo__item');
	li.textContent = initialValue;

	const button = document.createElement('button');
	button.textContent = 'X';
	button.classList.add('delete');

	li.appendChild(button);
	return li;
}

todoForm.addEventListener('submit', addNewTask);
list.addEventListener('click', removeTask);