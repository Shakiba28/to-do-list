function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if (task === "") {
        alert("enter your task !")
    } else {
        var todos = get_todos();
        todos.push(task);
        alert("Added task ✔");
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


function done() {

}

function show() {
    var todos = get_todos();

    var html = '<ul class="bg-warning list-unstyled ">';
    for (var i = 0; i < todos.length; i++) {
        html += '<li class="list">' + todos[i] + '<div > <i class="bi bi-check-lg done"></i><i class="bi bi-trash-fill remove" id="' + i + '"></i></div></li>';
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

