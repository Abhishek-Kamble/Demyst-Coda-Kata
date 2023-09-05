const descisionEngineOutcome = ({
  loanAmount,
  preAssessment,
  email,
  establishYear,
}) => {
  return {
    loanAmount: loanAmount,
    preAssessment: preAssessment,
    email: email,
    message: "Application submitted",
  };
};

export default descisionEngineOutcome;
