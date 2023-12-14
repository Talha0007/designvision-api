const Products = require("../models/Product");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ejs = require("ejs");
const path = require("path");

exports.postNew = async function (req, res) {
  console.log("nnnnnn", req.body)

  const { productName, productDescription, productPrice, productQuantity , prodImage} = req.body;
  if (
    !productName || 
    !productDescription ||
    !productPrice ||
    !productQuantity ||
    !prodImage
    ){
    return res.status(422).json({
      message: "All feilds are required",
    });
  }
  try { 
    const product = new Products({ productName: productName, productDescription: productDescription, productPrice: productPrice , productQuantity : productQuantity , prodImage: prodImage });
    const products = await product.save();
    res.status(200).json({ message: "successSave", products });
  } catch (error) {
    console.log("is match 1st error===>>>", error)
    res.status(404).json({ success: false, message: error.message }); 
  }
};




exports.getAllProd = async function (req, res) {
  console.log("nnnnnn", req.body)

  const { productName, productDescription, productPrice, productQuantity , prodImage} = req.body;

  try { 
    const product = await Products.find();
    res.status(200).json({ message: "successSave", product });
  } catch (error) {
    console.log("is match 1st error===>>>", error)
    res.status(404).json({ success: false, message: error.message }); 
  }
};