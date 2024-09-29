const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://gowrinarayanannarayanan:gowri123@cluster0.nkwvy.mongodb.net/employeeapp?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('Connection established');
}).catch(()=>{
    console.log('Error in connection');
})
module.exports=mongoose;