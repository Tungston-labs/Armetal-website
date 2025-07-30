require("dotenv").config();
const express = require("express");

const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);

// const PORT = 5000;
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
