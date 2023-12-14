const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    field: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    description: {
      type: String,
    },
    name: {
      type: String,
    },
    route: {
        type: String,
    },
  },
);

module.exports = mongoose.model("Services", serviceSchema);
