const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/users", require("./routes/user_routes"));
app.use("/api/trainers", require("./routes/trainer_routes"));
app.use("/api/workouts", require("./routes/workout_routes"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
