import { readAllTodos, readSingleTodo, addInTodo } from "../repository/todos.repo.js";

export function getAllTodos(req,res)
{
    try{
        const allTodos = readAllTodos();
        const response = {
            succes: true,
            todos: allTodos,
            error:null
        }

        res.statusCode = 200;
        res.end(JSON.stringify(response));
    }
    catch(err)
    {
        const response = {
            success: false,
            todos: null,
            error : err.message
        }

        res.statusCode = 500;
        res.end(JSON.stringify(response));
    }
}

export function getSingleTodo(req,res)
{
    try{
        const id = parseInt(req.params.id);
        const todo = readSingleTodo(id);
        const response = {
            succes: true,
            todo: todo,
            error:null
        }

        res.statusCode = 200;
        res.end(JSON.stringify(response));
    }
    catch(err)
    {
        const response = {
            success: false,
            todos: null,
            error : err.message
        }

        res.statusCode = 500;
        res.end(JSON.stringify(response));
    }
}

export function postTodo(req,res)
{
    const bodyObj = req.body;
    const userId = parseInt(req.query.userId);

    const todoObj = {...bodyObj, userId};

    addInTodo(todoObj);

    res.statusCode = 201;
    res.end("todo updated successfully");
}

export function putUpdateTitle(req,res)
{

}

export function patchUpdateStatus(req,res)
{

}

export function deleteTodo(req,res)
{
    
}