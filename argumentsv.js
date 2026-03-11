// console.log(process.argv[2])

const fs=require("fs");

fs.readFile(process.argv[2],"utf-8",function(err,data){
    if(err)console.log(err);

    let size=data.length;
    let ans=data.split(' ').join('\n');
    console.log(ans);

})