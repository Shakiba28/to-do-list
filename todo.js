function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//Add the task to the array

function add() {
    var task = document.getElementById('task').value;
    if (task === "") {
        alert("enter your task !")
    } else {
        var todos = get_todos();
        todos.push(task);
        alert("Added task !");
        localStorage.setItem('todo', JSON.stringify(todos));

        show();

        return false;
    }

}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    alert("task remove!");
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
window.onload = function () {
    checked();
};
function checked() {
    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

function show() {
    var todos = get_todos();

    var html = '<ul class="bg-warning list-unstyled" id="ulist">';
    for (var i = 0; i < todos.length; i++) {
        html += '<div class="d-flex justify-content-between align-items-center mx-2"><li class="list">' + todos[i] + '</li><i class="bi bi-trash-fill remove" id="' + i + '"></i></div>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
document.getElementById('add').addEventListener('click', add);

show();
