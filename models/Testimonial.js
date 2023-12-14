const mongoose = require("mongoose");
const TestimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
  },
  fieldName: {
    type: String,
  },
  gender: {
    type: String,
    default: "male",
  },
  country: {
    type: String,
  },
  review: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("Testimonials", TestimonialSchema);
