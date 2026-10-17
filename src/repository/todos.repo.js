import fs, { read } from "fs";

export function readAllTodos()
{
    const data = fs.readFileSync("src/db/todos.db.json","utf8");
    const dataObj = JSON.parse(data);
    const allTodos = dataObj.todos;

    return allTodos;
}

export function writeInTodos(obj)
{
    fs.writeFileSync("src/db/todos.db.json", JSON.stringify(obj));
}

export function addInTodo(todoObj)
{
    const allTodos = readAllTodos();
    allTodos.push(todoObj);
    writeInTodos({todos: allTodos});
}

export function readSingleTodo(id)
{
    const allTodos = readAllTodos();

    const filteredTodos = allTodos.filter(val=>{
        if(val.id === id)
            return true;

        return false;
    })

    return filteredTodos[0];
}