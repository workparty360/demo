const express=require("express");

const app=express();

users=[];
app.use(express.json());

function generate_token(){

    const token_chars = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]; 
    let size=token_chars.length;
    let token="";
    for(let i=0;i<32;i++){
        token+=token_chars[Math.floor(Math.random()*(size-1))];
    }
    return token;
}
// let token=generate_token();
// console.log(token);
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
    let token=generate_token();
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
    const token=req.headers["token"];
    console.log(token);
    const user=users.find(it=>it.token==token);
    if(user){
        res.json({
            username:user.username,
            password:user.password
        });
    }
    else{
        res.send("not found")
    }
}
    
)

app.listen(3000);