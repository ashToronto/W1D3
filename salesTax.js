var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here

    var BombardierTax = salesTaxRates.AB;
    var bombardierSales = companySalesData[1].sales;
    // console.log(bombardierSales)
    var salesBomb = bombardierSales.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
    }, 0);
    // console.log(salesBomb) // BOMBARDIER SALES VALUE

    var BombardierTaxValue = salesTaxRates.AB * salesBomb
    // console.log(BombardierTaxValue) // BOMBARDIER TAX AMMOUNT)

    var TelusSalesBC = companySalesData[0].sales
    var TelusTotalSalesBC = TelusSalesBC.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
    }, 0);
    // console.log(TelusTotalSalesBC); // TELUS TOTAL SALES B.C
    var TelusTaxBC = TelusTotalSalesBC * salesTaxRates.BC; // TELUS B.C TAX VALUE

    var TelusSalesSK = companySalesData[2].sales
    var TelusTotalSalesSK = TelusSalesSK.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
    }, 0);

    // console.log(TelusTotalSalesSK); // TELUS TOTAL SALES SK
    var TelusTaxSK = TelusTotalSalesSK * salesTaxRates.SK; // TELUS SK TAX VALUE

    var totalTelusSales = TelusTotalSalesSK + TelusTotalSalesBC;
    var totalTelusTax = TelusTaxSK + TelusTaxBC;

    // console.log(totalTelusSales); // Telus Total Sales
    // console.log(totalTelusTax); // Telus Total tax payable

    var companies = {
      Telus: {
        totalSales: totalTelusSales,
        totalTaxes: totalTelusTax
      },
      Bombardier: {
        totalSales: salesBomb,
        totalTaxes: BombardierTaxValue
      }
    }
    return console.log(companies)
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/