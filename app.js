const express= require('express');
const app= express();
const authorRouter= require("./routes/authorRouter");
const bookRouter= require("./routes/bookRouter");
const indexRouter= require("./routes/indexRouter");
const path= require("node:path");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

const links=[
    { href: "/", text: "Home"},
    { href: "/about", text: "About"},
];

const users=["Rose", "Cake","Biff"];

app.get("/", (req,res) =>{
    res.render("index", {links:links, users:users});
});

app.get("/about", (req,res)=>{
    res.render("about", {name: "Gaurav"});
});


app.use((err, req,res,next)=>{
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

app.listen(3000, (err) => {
    if(err) throw err;
    console.log(`My first express app listening`);
});