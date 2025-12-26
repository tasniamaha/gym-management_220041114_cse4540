const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/users", require("./routes/userRoutes.js"));
app.use("/api/trainers", require("./routes/trainerRoutes.js"));
app.use("/api/workouts", require("./routes/workoutRoutes.js"));

app.listen(5000, () => console.log("Server running on port 5000"));
