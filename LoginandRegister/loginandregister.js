const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');7

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// schema files
require('./userDetails')

// import db model from schema
const User = mongoose.model('userInfo');

// mongo database connectivity
const mongoURL = "mongodb+srv://practice:practice@cluster0.he5oqx0.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{
    useNewUrlParser:true
}).then(()=>{
    console.log("Connected to database.");
}).catch( (e) =>{
    console.log(e);
});

//API for login 
app.post('/login', async(req, res)=>{
        
     const {email, password} = req.body;

     try {
        const user = await User.findOne({ email: email });
        if (user) {
          if (password === user.password) {
            res.send({ message: "Login Successful", user: user });
          } else {
            res.send({ message: "Password did not match." });
          }
        } else {
          res.send({ message: "User not registered." });
        }
      } catch (error) {
        // Handle the error
        res.send({ message: "An error occurred." });
      }
      
});

//API for registration
app.post('/register', async(req, res)=>{
        
    const {Fname, Lname, email, password, Contact, Address} = req.body;

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
          res.send({ message: "User Already Registered" });
        } else {
          const newUser = new User({
            Fname: Fname,
            Lname: Lname,
            email: email,
            password: password,
            Contact: Contact,
            Address: Address
          });
      
          await newUser.save();
          res.send({ message: "Successfully Registered, Please Log in now." });
        }
      } catch (error) {
        // Handle the error
        res.send({ message: "An error occurred." });
      }
      
    })

    

//server running 
app.listen(4000,() =>{
     
    console.log('Server Running at 4000. ');

});