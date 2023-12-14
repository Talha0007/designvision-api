const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String
        },
        productDescription: {
            type: String
        },
        productPrice: {
            type: String
        },
        productQuantity:{
            type:Array
        },
        prodImage:{
            type:Array
        },
    }
);

module.exports = mongoose.model("Products", ProductSchema);
