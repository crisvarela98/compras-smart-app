function getNegotiationSuggestion(data) {
  const { price, marketPrice, otif, tco } = data;

  let messages = [];

  if (price > marketPrice) {
    messages.push("Precio por encima del mercado. Negociar descuento.");
  }

  if (otif < 80) {
    messages.push("Proveedor con bajo OTIF. Riesgo en entregas.");
  }

  if (tco > marketPrice * 1.2) {
    messages.push("TCO elevado. Revisar costos logísticos.");
  }

  if (messages.length === 0) {
    messages.push("Condiciones óptimas. Compra recomendada.");
  }

  return messages;
}

module.exports = { getNegotiationSuggestion };