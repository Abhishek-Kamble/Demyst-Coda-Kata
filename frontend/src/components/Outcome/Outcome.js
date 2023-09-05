import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";

const Outcome = () => {
  const location = useLocation();
  const { applicationDetails } = location.state;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          <TableRow
            key="message"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Message:
            </TableCell>
            <TableCell align="right">{applicationDetails.message}</TableCell>
          </TableRow>

          <TableRow
            key="loan-amount"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Loan Amount
            </TableCell>
            <TableCell align="right">{location.state.loanAmount}</TableCell>
          </TableRow>

          <TableRow
            key="saction"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Sanctioned Amount
            </TableCell>
            <TableCell align="right">
              {(applicationDetails.preAssessment *
                applicationDetails.loanAmount) /
                100}
            </TableCell>
          </TableRow>

          <TableRow
            key="email"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Email
            </TableCell>
            <TableCell align="right">{applicationDetails.email}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Outcome;
