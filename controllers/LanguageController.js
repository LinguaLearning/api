const Language = require("../models/Language");

const getLanguages = (req, res) => {
  Language.find()
    .then((response) => {
      res.send({
        response,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const createLanguage = (req, res) => {
  const body = req.body;

  console.log(req.body)

  const newLanguage = new Language({
    name: body.name,
    countryCode: body.countryCode,
  })

  newLanguage.save();
}

module.exports = {
  createLanguage,
  getLanguages
}