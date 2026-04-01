const { analyzePurchase } = require("../../decision-engine/engine");

function evaluateNegotiation(data) {
  return analyzePurchase(data);
}

module.exports = { evaluateNegotiation };