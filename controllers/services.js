const Services = require("../models/Service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ejs = require("ejs");
const path = require("path");

exports.postNew = async function (req, res) {
  console.log("nnnnnn", req.body)
  // const {password, email, } = req.body;
  const currentDate = new Date(); // Create a new Date object

  const { field, description, name, route} = req.body;
  const dateTime = formattedDateTime;
  if (
    !title || 
    !image ||
    !mataTags ||
    !mataDescription ||
    !mataTitle ||
    !FocusKeyWords ||
    !blogCatagory
    ){
    return res.status(422).json({
      message: "All feilds are required",
    });
  }
  try { 
    const blog = new Blogs({ title: title, content: content, content1: content1 , content2 : content2 , dateTime: dateTime , type: "blog" , image:image, mataTags: mataTags, mataDescription: mataDescription , mataTitle: mataTitle , FocusKeyWords:FocusKeyWords , blogCatagory:blogCatagory });
    const blogs = await blog.save();
    res.status(200).json({ message: "successSave", blogs });
  } catch (error) {
    console.log("is match 1st error===>>>", error)
    res.status(404).json({ success: false, message: error.message }); 
  }
};

