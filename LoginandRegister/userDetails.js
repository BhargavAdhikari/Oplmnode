const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema(
{
        Fname: String,
        Lname: String,
        email: String,
        password: String,
        Contact: String,
        Address: String
},
      
{
    collection: 'userInfo',
}

);

mongoose.model('userInfo',userDetailsSchema,);