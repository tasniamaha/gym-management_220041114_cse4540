const router = require("express").Router();
const ctrl = require("../controllers/trainerController.js");

router.post("/", ctrl.createTrainer);
router.get("/", ctrl.getTrainers);
router.get("/:id", ctrl.getTrainerById);
router.put("/:id", ctrl.updateTrainer);
router.delete("/:id", ctrl.deleteTrainer);

module.exports = router;