const express=require("express");

const app=express();

function is_old_enough(age){
    if(age>=14){
        return true;
    }
    else{
        return false;
    }
}

function is_old_enough_middleware(req ,res ,next){
    let age=req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.json({
            msg:"You are not of age yet"
        })
    }
}

app.use(is_old_enough_middleware);

app.get("/ride",function(req,res){
    // if(is_old_enough(req.query.age)){
    // res.json({
    //     msg:"You have successfully riden ride 1"
    // });
// } else{
//     res.status(411).json({
//         msg:"Sorry you are not of age yet"
//     })
    res.json({
        msg:"You have ridden ride"
    });
// }

})

app.get("/ride1",function(req,res){
//     if(is_old_enough(req.query.age)){
//     res.json({
//         msg:"You have successfully riden ride 1"
//     });
// } else{
//     res.status(411).json({
//         msg:"Sorry you are not of age yet"
//     })
// }
res.json({
    msg:"You have ridden ride 1"
});

})

app.listen(3000);