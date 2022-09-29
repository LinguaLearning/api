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

module.exports = {
  getLessons,
};
