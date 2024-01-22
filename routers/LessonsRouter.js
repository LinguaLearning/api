const express = require("express");
const router = express.Router();
const { getLessons, createLesson } = require("../controllers/LessonController");
const { createLanguage, getLanguages } = require("../controllers/LanguageController");
const { createCourse, getCourses } = require("../controllers/CourseController");

router.get("/getLessons", getLessons);
router.get("/getLanguages", getLanguages);
router.get("/getCourses", getCourses);
router.post("/createLanguage", createLanguage);
router.post("/createCourse", createCourse);
router.post("/createLesson", createLesson);

module.exports = router;
