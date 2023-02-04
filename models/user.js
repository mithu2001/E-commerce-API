const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        min:6
    },
    img:{
        type:Array,
        default:[]
    }
});

module.exports = mongoose.model("User",userSchema);