const { calculateTCO } = require("../shared/utils/tcoCalculator");
const { getNegotiationSuggestion } = require("../modules/negotiation/rules");

function analyzePurchase(data) {
  const tco = calculateTCO(data);

  const suggestion = getNegotiationSuggestion({
    ...data,
    tco
  });

  return {
    tco,
    suggestion
  };
}

module.exports = { analyzePurchase };