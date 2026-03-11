// creating a http server
// express
// node default library

const express=require("express");

const app=express();
app.use(express.json());

let users=[{
    ProfileName:"John",
    kidneys:[{
        healthy:true
    },{
        healthy:false
    },{
        healthy:true
    }]}
]

app.get("/",function(req,res){
    let JohnKidneys=users[0].kidneys;
    let noOfKidneys=JohnKidneys.length;
    let noOfHealthyKidneys=JohnKidneys.filter((it)=> (it.healthy==true)).length;
    let noOfUnhealthyKidneys=noOfKidneys-noOfHealthyKidneys;
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    });
})
app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({healthy:ishealthy});
    res.json({
        msg:"done"
    }
    )
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({
        msg:"done"
    })
})

app.delete("/",function(req,res){
    const unHealthyKidneys=users[0].kidneys.filter((it)=>it.healthy==false).length;
    if(unHealthyKidneys>=1){
    const healthykidneys=users[0].kidneys.filter((it)=>it.healthy==true);
    users[0].kidneys=healthykidneys;
    res.json({
        msg:"done"
    })
}
    else{
        res.status(411).json({
            msg:"no unhealthy kidneys"
        })
    }
})


app.listen(3000);