const express = require('express')
const app = express();
const {User, Data} = require('../model/models');
const connectDB = require('../database/connection');


// Define the signup route to handle user registration
exports.sigin_code = async (req, res) => {
    const { username, password } = req.body;
    // Check if name and password are provided
    if (!username || !password) {
        return res.status(400).json({ message: 'Name and password are required' });
    }

    try {
        // Create a new instance of the User model
        const newUser = new User({
            username: username,  // Adjust field name based on your User schema
            password: password,
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Respond with success
        res.status(201).json({
            message: 'User registered successfully',
            data: savedUser,
        });

    } catch (error) {
        // Handle errors
        console.error('Error saving user:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.data_form = async (req,res) => {
    const{rollno, name}=req.body;

    if (!rollno || !name) {
        return res.status(400).send('Missing roll or name');
      }

    try{
        const newData= new Data({
            rollno:rollno,
            name:name
        })

        const saveData = await newData.save();
        res.status(201).json({
            message:'data insert successfully',
            data:saveData
        })
    }

    catch(error){
        res.status(500).json({
            message:'internal server error'
        })
    }
;}

// Controller: Fetch all data
exports.get_data = async (req, res) => {
    try {
        const allData = await Data.find(); // Fetch all data from the Data collection
        res.status(200).json(allData);
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
};

exports.get_signup = async (req,res) =>{
    try{
        const AllData = await User.find();
        res.status(200).json(AllData);
    }catch(error) {
        res.status(500).json({
            message:'internal server error',
        });
    }
};


