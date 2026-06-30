const { Router }= require("express");

const bookRouter = Router();

bookRouter.get("/", (req,res)=> res.send("All Books"));
bookRouter.get("/:bookId", (req,res)=> {
    const {  bookId }= req.params;
    res.send(`book Id: ${bookId}`);
});

module.exports= bookRouter;