const express=require("express");
const app=express();
const cors=require("cors");
require("./connection/conn");


app.use(express.json());
app.use(cors());
app.use(require("./router/Router"));
app.use(require("./router/RouterNote"));

app.listen(8000,()=>{
    console.log("Listening at 8000");
})