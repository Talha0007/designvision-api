const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ejs = require("ejs");
const path = require("path");

// @route GET api/user
// @desc Returns all users
// @access Public 
exports.signup = async function (req, res) {
  console.log("Abc===>>>", req.body) 
  const { firstName, lastName, email, password } = req.body;
  if ( 
    !firstName || 
    !lastName || 
    !email || 
    !password
  ) {
    res.status(500).json({ message: "Empty Fields" }) 
  } else { 
    try {
      let pass = await bcrypt.hash(password, 12);
      const user = new User({ firstName: firstName, lastName: lastName, password: pass , email : email , role:"user" });
      const users = await user.save();
      res.status(200).json({ message: "success", users });
    }
    catch (error) {
      console.log("bbbbb",error.code)
      res.send({success : false , message:error.code , status : error.code});
    }
  }
};


exports.login = async function (req, res) {
  // console.log("Abc===>>>", req.body)
  // const {password, email, } = req.body;
  console.log("Abc===>>>", req.body.password);
  const email = req.body.email;
  const password = req.body.password;

  try { 
    User.findOne({ email : email}, (err, response) => { 
      if(response === null){
        console.log("err=====", err)
        res.json({message:"User Not Found"})
      }else{
        console.log("check-=====", response.password)
        bcrypt.compare( password , response.password)
        .then((isMatch) => {
          if (isMatch) {
            console.log("user found", response);
            res.status(200).json({response: {firstName: response.firstName , email: response.email }, message : "successLogin"})
          } else {
            return res.status(400).json({ message: "Invalid Credentials" });
          }
        });
      }
    }); 
  } catch (error) {
    console.log("is match 1st error===>>>")
    res.status(404).json({ success: false, message: error.message }); 
  }
};


exports.GetAllUser = async function (req, res) {
  try {
    User.find((err, response) => {
      if(response === null){
        res.json({message:"User Not Found"})
      }else{
        console.log("user found")
        res.status(200).json({response})
      }
    }); 
  } catch (error) {
    console.log("is match 1st error===>>>")
    res.status(404).json({ success: false, message: error.message }); 
  }
};




