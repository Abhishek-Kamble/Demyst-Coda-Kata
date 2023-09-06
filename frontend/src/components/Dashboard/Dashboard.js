import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import CreateIcon from "@mui/icons-material/Create";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { getAccountList, getBalanceSheet } from "../../action/balanceSheets";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigation = useNavigate();
  const defaultTheme = createTheme();
  const [accountSoftwareName, setAccountSoftwareName] = useState("");
  const [accountList, setAccountList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [loanAmount, setLoanAmount] = useState("");

  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    if (!user) {
      navigation("/sign-in");
    }

    const fetchAccountList = async () => {
      const accountList = await getAccountList();
      setAccountList(accountList);
    };
    fetchAccountList();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const sheetData = await getBalanceSheet(accountSoftwareName);

    const sheet = sheetData.data.sheet;

    navigation("/balance-sheet", {
      state: { sheet, loanAmount, accountSoftwareName },
    });
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Function to handle changes in the numeric input field
  const handleNumericInputChange = (event) => {
    const value = event.target.value;
    setLoanAmount(value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <CreateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Fill up the following details
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="businessName"
                  label="Business Name"
                  name="businessName"
                  value={user?.result?.name}
                  disabled={true}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="establishedYear"
                  label="Established Year"
                  name="establishedYear"
                  value={user?.result?.establishYear}
                  disabled={true}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="loanAmount"
                  label="Loan Amount"
                  name="loanAmount"
                  autoComplete="loan-amount"
                  type="number"
                  value={loanAmount}
                  onChange={handleNumericInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="select-acc-soft">
                    Choose accounting software
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={accountSoftwareName}
                    label="accountList"
                    onChange={(e) => {
                      setAccountSoftwareName(e.target.value);
                    }}
                  >
                    {accountList?.map((ele, index) => (
                      <MenuItem key={index} value={ele.softName}>
                        {ele.softName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="I agree terms and conditions."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={
                !isChecked || loanAmount <= 0 || accountSoftwareName === ""
              }
            >
              Get Balance Sheet
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
