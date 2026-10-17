// Creating a express server from scratch

// importing libraries
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// importing routers--> todos.router and users.router

import todosrouter from "./Routers/todos.router.js";
import usersrouter from "./Routers/users.router.js";

const PORT= process.env.PORT || 3001;

// creating a handler or we can say app
const app=express();

// using middlewares
app.use(express.json()); // to use req.body()
app.use(express.urlencoded({extended:true}));
app.use("/todos",todosrouter); // http:/localhost:3001/todosrouter
app.use("/users",usersrouter); 

// checking weather server healthy or not
app.get("/healthy",(req,res)=>{
        res.end("Server is Healthy--Don't need to worry..."); // static routing
});
 
// dynamic routing

app.get("/healthy/:random",(req,res)=>{
        const valrandom=req.params.random;
        res.end(`Server is running on Port : ${PORT} and Showing value: ${valrandom}`);
});

app.listen(PORT,()=>{
    console.log(`Server running sucessfully on PORT : ${PORT}`); // http:/localhost:3001/healthy
})


/* import express from "express"; // Libraries
import dotenv from "dotenv";
dotenv.config();

// importing Routers
import todosRouter from "./Routers/todos.router.js";
import usersRouter from "./Routers/users.router.js";

const PORT=process.env.PORT || 3001; // ||--> is fallback i.e if PORT does not exist in .env show no error and use fallback value

const app=express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// using routers 
app.use("/todos",todosRouter);
app.use("/users",usersRouter);

app.get("/healthy",(req,res)=>{ // static routing for dynamic app.get("/healthy/:...")
    res.end("Server is Healthy and running smoothly"); // http://localhost:3001/healthy
});

app.get("/healthy/:random",(req,res)=>{

    const randomval=req.params.random;
    res.end(`This is the Random PATH : ${randomval} of Port Number: ${PORT}`); // http://localhost:3001/healthy/....any value
}); 

app.listen(PORT,()=>{
    console.log(`Server Running at port : ${PORT}`); // Dynamic String
}) */