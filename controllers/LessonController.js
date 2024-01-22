const Lesson = require("../models/Lesson");

const getLessons = (req, res) => {
  Lesson.find()
    .then((response) => {
      res.send({
        response,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const createLesson = (req, res) => {
  const body = req.body;

  const lesson = new Lesson({
    name: body.name,
    description: body.name,
    saved: false,
    content: "",
    author: body.author,
    lessonImg: body.lessonImg
  });

  lesson.save();
}

module.exports = {
  getLessons,
  createLesson
};
