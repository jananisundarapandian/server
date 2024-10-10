const mongoose = require('mongoose');
const Userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    

});
const user= mongoose.model('User',Userschema);
module.exports=user;