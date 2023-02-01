const router = require("express").Router();
const { Campus, Student } = require("../db");
// GET /Campuses
router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      include: [Student],
    });
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

// Write a route to serve up a single campus (based on its id), _including that campuses' students_
//campuses
// GET /campuses/:campusId
router.get("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId, {
      include: [Student],
    });
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

// [ ] Write a route to add a new campus
router.post("/", async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.send(newCampus);
  } catch (err) {
    next(err);
  }
});
// - [ ] Write a route to remove a campus (based on its id)
router.delete("/:id", async (req, res, next) => {
  try {
    const campusToRemove = await Campus.findByPk(req.params.id);
    if (!campusToRemove) {
      let err = new Error(
        "Cannot remove Campus - No Campus found with that ID"
      );
      err.status = 404;
      next(err);
    } else {
      await campusToRemove.destroy();
      const remainingCampuses = await Campus.findAll();
      res.send(remainingCampuses);
    }
  } catch (err) {
    next(err);
  }
});
//- [ ] Write a route to update an existing campus
router.put("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    res.send(await campus.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
