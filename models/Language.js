const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languagesSchema = new Schema(
  {
    name: {
      type: String,
    },
    countryCode: {
      type: String,
    }
  },
  { timestamps: true }
);

const Lesson = mongoose.model("Languages", languagesSchema);
module.exports = Lesson;
