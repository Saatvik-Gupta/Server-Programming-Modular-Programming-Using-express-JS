export function checkTodoBody(req,res,next)
{
    const userId = parseInt(req.query.userId);
    const bodyObj = req.body;

   if(req.method === "POST")
   {
    if(!bodyObj.id)
    {
        res.statusCode=401;
        res.end("ID is not provided");
        return;
    }

    if(!bodyObj.title)
    {
        res.statusCode=401;
        res.end("Title is not provided");
        return;
    }

    if(!bodyObj.completed)
    {
        res.statusCode=401;
        res.end("status is not provided");
        return;
    }

    if(!userId)
    {
        res.statusCode=401;
        res.end("userid is not provided");
        return;
    }
}

    next();
}