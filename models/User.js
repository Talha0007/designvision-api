const mongoose = require("mongoose"); 

const UserSchema = new mongoose.Schema(
  {
    firstName:{
      type:String
    },
    lastName:{
      type : String,
      unique: true
    },
    email: {
      type:String, 
      unique:true
    },
    password: {
      type:String
    },
    role: {
      type:String,
      default:"user"
    }
  }
); 

module.exports = mongoose.model("Users", UserSchema);
