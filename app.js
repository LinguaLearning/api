const express = require("express");
const mongoose = require("mongoose");
const lessonRouter = require("./routers/LessonsRouter");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 2022;

require("dotenv").config();

app.use(cors());
app.use("/lessons", lessonRouter);

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Example app listening on port ${port} and the server has started`
      );
    });
  });
