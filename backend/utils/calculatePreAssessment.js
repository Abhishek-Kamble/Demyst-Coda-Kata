const calculatePreAssessment = (sheet, loanAmount) => {
  // Sort the sheet in descending order of year and month
  sheet.sort((a, b) => {
    if (a.year === b.year) {
      return b.month - a.month;
    }
    return b.year - a.year;
  });

  // Calculate the sum of profitOrLoss and assetsValue for the first 12 entries
  let sumProfitOrLoss = 0;
  let sumAssetsValue = 0;
  for (let i = 0; i < Math.min(12, sheet.length); i++) {
    sumProfitOrLoss += sheet[i].profitOrLoss;
    sumAssetsValue += sheet[i].assetsValue;
  }

  const averageAssetsValue = sumAssetsValue / Math.min(12, sheet.length);

  let preAssessment;

  if (sumProfitOrLoss > 0) {
    preAssessment = 60;
  } else {
    preAssessment = 20;
  }

  if (averageAssetsValue > loanAmount) {
    preAssessment = 100;
  }

  return preAssessment;
};

export default calculatePreAssessment;
