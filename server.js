const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/trainers", require("./routes/trainerRoutes"));
app.use("/api/workouts", require("./routes/workoutRoutes"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
