const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    saved: {
      type: Boolean,
    },
    content: {
      type: String,
    },
    author: {
      type: String,
    },
    lessonImg: {
      type: String,
    },
    lessonOrder: {
      type: Number,
    }
  },
  { timestamps: true }
);

const Lesson = mongoose.model("Lesson", lessonSchema);
module.exports = Lesson;
