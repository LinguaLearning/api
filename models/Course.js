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
    lang_id: {
      type: String,
    },
    lesson: [{
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      lesson_id: {
        type: String,
      },
      saved: {
        type: Boolean,
      },
      img: {
        type: String,
      }
    }],
    course_img: {
      type: String
    },
    difficulty: {
      type: String
    },
    level: {
      type: String
    },
  },
  { timestamps: true }
);

const Lesson = mongoose.model("Course", lessonSchema);
module.exports = Lesson;
