const mongoose = require("mongoose");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
    },
  },
});
