const express = require("express");
const cors = require("cors");
const skiRoutes = require("./routes/skiRoutes");
const app = express();
const PORT = 3007;

app.use(express.json());

app.use("/api/skis", skiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
