import express from "express";
import { getAllTodos, getSingleTodo, postTodo } from "../controllers/todos.controller.js";
import { checkTodoBody } from "../middlewares/todos.middleware.js";

const todoRouter = express.Router();


todoRouter.use(checkTodoBody);

todoRouter.get("/", getAllTodos);

todoRouter.get("/:id", getSingleTodo);

todoRouter.post("/", postTodo);

// todoRouter.put("/");
// todoRouter.patch("/");
// todoRouter.delete("/")

export default todoRouter;