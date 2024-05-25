
 
 
 const mongoose = require('mongoose');



const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://sriparnac28:sriparna@cluster0.f8s3ald.mongodb.net/');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB;