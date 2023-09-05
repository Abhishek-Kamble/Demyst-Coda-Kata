import jwt from "jsonwebtoken";
import "dotenv/config";
const secrete = process.env.secrete;
import calculatePreAssessment from "../utils/calculatePreAssessment.js";
import descisionEngineOutcome from "./descisionEngine.controller.js";

export const submitApplication = async (req, res) => {
  const { sheet, loanAmount } = req.body;
  const preAssessment = calculatePreAssessment(sheet, loanAmount);

  const token = req.headers.authorization.split(" ")[1];
  let decodedData;
  if (token) {
    decodedData = jwt.verify(token, secrete);
  }

  const email = decodedData.email;
  const establishYear = decodedData.establishYear;

  try {
    const outcome = descisionEngineOutcome({
      loanAmount,
      preAssessment,
      email,
      establishYear,
    });

    res.status(201).json({
      applicationDetails: outcome,
    });
  } catch (error) {
    res.status(400).json({ error: "Something went wrong", err: error.message });
  }

  //TODO function to make API call for descision engine
};
