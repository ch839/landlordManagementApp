const router = require("express").Router();
const { Campus, Student } = require("../db");

//get all students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: [Campus],
    });
    res.json(students);
  } catch (err) {
    console.log(err);
  }
});
//   - [ ] Write a route to serve up a single student (based on their id), _including that student's campus_
router.get("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId, {
      include: [Campus],
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});

//  - [ ] Write a route to add a new student
router.post("/", async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.send(newStudent);
    console.log(req.body);
  } catch (err) {
    next(err);
  }
});
//  - [ ] Write a route to remove a student (based on their id)
router.delete("/:id", async (req, res, next) => {
  try {
    const studentToRemove = await Student.findByPk(req.params.id);
    if (!studentToRemove) {
      let err = new Error(
        "Cannot remove Student - No Student found with that ID"
      );
      err.status = 404;
      next(err);
    } else {
      await studentToRemove.destroy();
      const remainingStudents = await Student.findAll();
      res.send(remainingStudents);
    }
  } catch (err) {
    next(err);
  }
});
// - [ ] Write a route to update an existing student
router.put("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    const updatedStudent = await student.update(req.body);
    res.send(updatedStudent);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
