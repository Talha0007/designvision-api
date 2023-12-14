const express = require("express");
const Service = require("../controllers/services"); 
const router = express.Router();

router.post("/postNew",  Service.postNew); 
module.exports = router;  