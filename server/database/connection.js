const mongoose = require('mongoose');
require('dotenv').config()

const uri = process.env.MONGODBURI ||  'mongodb://localhost:27017/work_space';

async  function connectDB() {
    try {
        await mongoose.connect(`${uri}`);
            console.log('Successfully Connected to MongoDB');
    } catch (error) {
        console.error(error.message);
    }
}

module.exports  = connectDB;