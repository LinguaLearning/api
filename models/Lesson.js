const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    difficulty: {
      type: String,
    },
    lesson_number: {
      type: Number,
    },
    lesson_container: {
      type: Array,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Lesson = mongoose.model("French", lessonSchema);
module.exports = Lesson;
