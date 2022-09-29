const express = require("express");
const router = express.Router();
const { getLessons } = require("../controllers/LessonController");

router.get("/getLessons", getLessons);

module.exports = router;
