
const axios=require('axios')

function main(){
    fetch('https://httpdump.app/dumps/2c4dca5e-0ece-45cc-8552-d8a655f8d624',{
        method:'POST',
        headers:{
            username:"Daksh",
            surname:"Jain",
            password:"1234"
        },
        body:"HelloHi"
    })
    .then(async function(response){
        const textualdata=await response.text();
        console.log(textualdata);
    })
}

async function main1(){
    const response=await axios.post('https://httpdump.app/dumps/2c4dca5e-0ece-45cc-8552-d8a655f8d624',{
        name:"Daksh"
    },{
        headers:{
            username:"Daksh",
            password:"1234"
        }
    })
    console.log(response.data);
}

async function main2(){
    const resp=await axios({
        url:"https://httpdump.app/dumps/2c4dca5e-0ece-45cc-8552-d8a655f8d624",
        headers:{
            username:"Workparty",
            password:"234"
        },
        data:{
            name:"Daksh",
            surname:"Jain"
        }
    })
}
main2();