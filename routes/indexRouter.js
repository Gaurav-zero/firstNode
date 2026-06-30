const { Router }= require("express");

const indexRouter = Router();

indexRouter.get("/", (req,res)=> res.send("All index"));
indexRouter.get("/:indexId", (req,res)=> {
    const {  indexId }= req.params;
    res.send(`index Id: ${indexId}`);
});

module.exports= indexRouter;