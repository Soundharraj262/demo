const { default: mongoose } = require('mongoose');

const userSchema = new mongoose
.Schema({
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required: true
    }
});

const dataSchema = new mongoose.Schema({
    rollno:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        requried:true
    }
});

const User=mongoose.model('User',userSchema);
const Data=mongoose.model('Data',dataSchema);

module.exports = {User, Data};