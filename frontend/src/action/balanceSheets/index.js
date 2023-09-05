import { fetchAccountingSoftwareList, fetchBalanceSheet } from "../../api";

export const getBalanceSheet = async (loanAmount, accountSoftwareName) => {
  const sheet = await fetchBalanceSheet({
    loanAmount: loanAmount,
    accountSoftwareName: accountSoftwareName,
  });
  return sheet;
};

export const getAccountList = async () => {
  const accountList = await fetchAccountingSoftwareList();
  return accountList.data.accountList;
};
