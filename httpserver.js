const express=require("express");
const cors=require("cors");


const app= express();

app.use(express.json());
app.use(cors());

app.post('/multiply',function(req,res){
    let a=req.body.a;
    let b=req.body.b;
    res.send(a*b);
})

app.get('/sum',function(req,res){
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.send(a+b);
})

app.get('/divide',function(req,res){
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.send(a/b);
})

app.get('/subtract',function(req,res){
    let a=parseInt(req.query.a);
    let b=parseInt(req.query.b);
    res.send(a-b);
})

app.use(function(err,req,res,next){
    res.send("There was a error");
})

app.listen(3000);