const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: "Trainer", required: true },
  workoutType: String,
  scheduledAt: Date,
  status: {
    type: String,
    enum: ["scheduled", "completed", "cancelled"],
    default: "scheduled"
  },
  notes: String
});

module.exports = mongoose.model("Workout", workoutSchema);
