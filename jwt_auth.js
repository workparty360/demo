const express=require("express");
const jwt=require("jsonwebtoken");

const app=express();
const JWT_Secret="daksh";

let users=[];

app.use(express.json());

app.post("/signup",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    
    const user=users.find((it)=>it.username==username);
    if(user){
        res.send("Already exists");
    }
    else{
        users.push({username,password});
        res.send("Signed up")
    }
    
})

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    
    let user=users.find((it)=>it.username==username&&it.password==password);
    if(user){
    let token=jwt.sign(username,JWT_Secret);
    user.token=token;
    res.json({
        token:token
    })
}
    else{
    res.json({
        error:"user not found"
    })
}
})

app.get("/me",function(req,res){
    const token=req.headers.token;
    const username=jwt.verify(token,JWT_Secret);

    let user=users.find(it=>it.username==username);
    if(user){
        res.json({
            username:user.username,
            password:user.password
        })
    }
    else{
        res.status(404).json("no user exists")
    }

})

app.listen(3000);