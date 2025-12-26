const Trainer = require("../models/trainer_model.js");

exports.createTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.create(req.body);
    res.status(201).json(trainer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.findAll();
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTrainerById = async (req, res) => {
  try {
    const trainer = await Trainer.findByPk(req.params.id);
    if (!trainer) return res.status(404).json({ error: "Trainer not found" });
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByPk(req.params.id);
    if (!trainer) return res.status(404).json({ error: "Trainer not found" });
    await trainer.update(req.body);
    res.json(trainer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByPk(req.params.id);
    if (!trainer) return res.status(404).json({ error: "Trainer not found" });
    await trainer.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};