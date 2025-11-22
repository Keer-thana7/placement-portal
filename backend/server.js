const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/company", require("./routes/companyRoutes"));
app.use("/api/questions", require("./routes/questionRoutes"));
app.use("/api/materials", require("./routes/materialRoutes"));
app.use("/api/updates", require("./routes/updateRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
