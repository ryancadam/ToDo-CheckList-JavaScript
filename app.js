const addForm = document.querySelector('.add');
const uList = document.querySelector('.todos');
const search = document.querySelector('.search input');

const newTodo = todo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>    
    `;
    uList.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        newTodo(todo)
        addForm.reset()};
});

// delete toDos
uList.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    };
});

// search
const filterTodos = (searchValue) => {
    Array.from(uList.children)
        .filter((todo) => !todo.textContent.includes(searchValue))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(uList.children)
        .filter((todo) => todo.textContent.includes(searchValue))
        .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
    const searchValue = search.value.trim();
    filterTodos(searchValue);
});