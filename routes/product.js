const express = require("express");
const Product = require("../controllers/product"); 
const router = express.Router();

router.post("/postNew" ,  Product.postNew);
router.post("/getAllProd" ,  Product.getAllProd);
  
module.exports = router;   