const { evaluateNegotiation } = require("./service");

function analyze(req, res) {
  try {
    const result = evaluateNegotiation(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error en análisis de negociación" });
  }
}

module.exports = { analyze };