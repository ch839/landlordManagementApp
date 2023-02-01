const Sequelize = require("sequelize");
const db = require("./db");

const Campus = db.define("campuses", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://static.vecteezy.com/system/resources/previews/006/470/649/original/university-education-logo-design-template-free-vector.jpg",
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "This is the description of the University",
  },
});

module.exports = Campus;
