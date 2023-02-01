const Sequelize = require("sequelize");
const db = require("./db");

const Student = db.define("students", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue:
      "https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108391877.jpg",
  },
  gpa: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      max: 4.0,
      min: 0.0,
    },
  },
});

module.exports = Student;
