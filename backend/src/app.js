const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const negotiationRoutes = require("./modules/negotiation/routes");
app.use("/api/negotiation", negotiationRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Compras Smart API running" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(🚀 Backend running on http://localhost:${PORT});
});