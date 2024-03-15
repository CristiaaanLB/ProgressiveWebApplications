const url = 'https://jsonplaceholder.typicode.com/todos';

async function allTodosOnlyIds() {
    try {
        const response = await axios.get(url);
        return response.data.map(todo => ({ id: todo.id }));
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
        return [];
    }
}

async function allTodosIdsAndTitles() {
    try {
        const response = await axios.get(url);
        return response.data.map(todo => ({ id: todo.id, title: todo.title }));
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
        return [];
    }
}

async function uncompletedTodosIdsAndTitles() {
    try {
        const response = await axios.get(url);
        return response.data.filter(todo => !todo.completed).map(todo => ({ id: todo.id, title: todo.title }));
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
        return [];
    }
}

async function completedTodosIdsAndTitles() {
    try {
        const response = await axios.get(url);
        return response.data.filter(todo => todo.completed).map(todo => ({ id: todo.id, title: todo.title }));
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
        return [];
    }
}

async function allTodosIdsAndUserIds() {
    try {
        const response = await axios.get(url);
        return response.data.map(todo => ({ id: todo.id, userId: todo.userId }));
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
        return [];
    }
}

async function completedTodosIdsAndUserIds() {
    try {
        const response = await axios.get(url);
        return response.data.filter(todo => todo.completed).map(todo => ({ id: todo.id, userId: todo.userId }));
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
        return [];
    }
}

async function uncompletedTodosIdsAndUserIds() {
    try {
        const response = await axios.get(url);
        return response.data.filter(todo => !todo.completed).map(todo => ({ id: todo.id, userId: todo.userId }));
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
        return [];
    }
}

async function renderTodos(option) {
    let todos;
    switch (option) {
        case 1:
            todos = await allTodosOnlyIds();
            break;
        case 2:
            todos = await allTodosIdsAndTitles();
            break;
        case 3:
            todos = await uncompletedTodosIdsAndTitles();
            break;
        case 4:
            todos = await completedTodosIdsAndTitles();
            break;
        case 5:
            todos = await allTodosIdsAndUserIds();
            break;
        case 6:
            todos = await completedTodosIdsAndUserIds();
            break;
        case 7:
            todos = await uncompletedTodosIdsAndUserIds();
            break;
        default:
            console.error("Opción no válida");
            return;
    }

    const todosListDiv = document.getElementById('todosList');
    todosListDiv.innerHTML = '';
    
    todos.forEach(todo => {
        let todoInfo;
        if (option === 1) {
            todoInfo = `${todo.id}`;
        } else {
            todoInfo = `${todo.id} | ${todo.title || todo.userId}`;
        }
        const todoItem = document.createElement('div');
        todoItem.textContent = todoInfo;
        todosListDiv.appendChild(todoItem);
    });
}
