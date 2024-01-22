const Course = require("../models/Course");

const getCourses = (req, res) => {
  Course.findall()
    .then((response) => {
      res.send({
        response,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const createCourse = (req, res) => {
  const body = req.body;

  const course = new Course({
    name: body.name,
    description: body.name,
    saved: false,
    lessons: [],
    lang_id: body.lang_id,
    difficulty: body.difficulty,
    level: body.level,
    course_img: body.course_img
  })

  course.save();
}

module.exports = {
  createCourse,
  getCourses
}
