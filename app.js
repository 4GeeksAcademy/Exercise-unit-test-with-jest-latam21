let oneEuroIs = {
    "JPY": 127.9, // Japan Yen
    "USD": 1.2,  // US Dollar
    "GBP": 0.8   // British Pound
};

const fromDollarToYen = function(valueInDollar) {
  if (valueInDollar >= 0) {
    return valueInDollar * oneEuroIs["JPY"] / oneEuroIs["USD"];
  } else {
    return "Valor en Dólar no válido";
  }
};

const fromEuroToDollar = function(valueInEuro) {
  if (valueInEuro >= 0) {
    return valueInEuro * oneEuroIs["USD"];
  } else {
    return "Valor en Euro no válido";
  }
};

const fromYenToPound = function(valueInYen) {
  if (valueInYen >= 0) {
    return valueInYen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
  } else {
    return "Valor en Yen no válido";
  }
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }