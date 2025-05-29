const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const skiRoutes = require("./routes/skiRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const PORT = process.env.PORT || 3008;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/skis", skiRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
