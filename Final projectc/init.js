const mongoose = require('mongoose');
const Chat=require("./modals/chat.js");


main().then(()=>{

    console.log("connection successful");
    
    })
    .catch(err => console.log(err));
    
    async function main() {
      await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    
     
    }
    let allchats=[
    {from:"vicky",
        to :"kay",
        msg:"send me your bill",
        created_at:new Date()
        


    },{


        from:"aman",
to :"gunjan",
msg:"send me ur food",
created_at:new Date()

    },
    {

        from:"ajit",
to :"priya",
msg:"send me your copy",
created_at:new Date()

    },
    {


        from:"atul",
to :"priya",
msg:"send me your bag",
created_at:new Date()

    }
     ,
     {


        from:"asur",
to :"meeena",
msg:"send me your kitkat",
created_at:new Date()

     }



]


    Chat.insertMany(allchats);
