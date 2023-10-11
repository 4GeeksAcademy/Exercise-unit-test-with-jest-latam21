const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('Change from Euro to USD', () => {

    let total = fromEuroToDollar(100);

    expect(total).toBe(120);
 
});

test('Change from USD to YEN', () => {

    let total = fromDollarToYen(100);

    expect(total).toBe(10658.333333333334);
 
});

test('Change from YEN to GBP', () => {

    let total = fromYenToPound(1000);

    expect(total).toBe(6.254886630179827);
 
});

