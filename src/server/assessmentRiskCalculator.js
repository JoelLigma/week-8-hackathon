const risks = ["Low", "Average", "High"];

module.exports = async function assessmentRiskCalculator(questions) {
  const riskIndex = Math.floor(Math.random() * 3);

  return risks[riskIndex];
};
