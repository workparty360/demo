new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("After 2 Secs");
        resolve();
    },3000);


}).then(function(){
    console.log("Promise Completed");
})