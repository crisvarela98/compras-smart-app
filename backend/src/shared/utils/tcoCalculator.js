function calculateTCO({ price, shipping = 0, delayCost = 0 }) {
  return price + shipping + delayCost;
}

module.exports = { calculateTCO };