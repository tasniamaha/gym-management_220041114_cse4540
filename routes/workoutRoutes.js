const router = require("express").Router();
const { scheduleWorkout } = require("../controllers/workoutController.js");

router.post("/schedule", scheduleWorkout);

module.exports = router;