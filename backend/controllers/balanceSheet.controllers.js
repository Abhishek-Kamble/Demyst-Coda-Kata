import { sheetData } from "../utils/accountSoft.js";
import accountSoftModel from "../models/accountingSoftware.models.js";

export const fetchBalanceSheet = async (req, res) => {
  const { businessName } = req.body;

  const balanceSheet = sheetData;

  try {
    await res.json({ sheet: balanceSheet });
  } catch (error) {
    await res.status(404).json({ message: error.message });
  }
};

export const fetchAccountingSoftwareList = async (req, res) => {
  try {
    const accountSoftList = await accountSoftModel.find();

    if (!accountSoftList)
      return res.status(404).json({ message: "List doesn't exist" });

    res.status(200).json({ accountList: accountSoftList });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
