import express from "express"; // Libraries
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
})