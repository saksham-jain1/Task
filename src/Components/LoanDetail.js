import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const LoanDetail = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you want to pay?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Box
        bgcolor="#FFE7CC"
        borderRadius={2}
        sx={{ p: 2, mx: "auto", my: 5, width: "100%" }}
      >
        <Typography
          textAlign="center"
          variant="h5"
          fontWeight="bold"
          color="#2196f3"
          mb={2}
        >
          Loan Amount: $5000
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Loan Term:</TableCell>
                <TableCell>4 Weeks</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Remaining Repayments:</TableCell>
                <TableCell>3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Loan Start Date</TableCell>
                <TableCell>12/12/2102</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Loan End Date</TableCell>
                <TableCell>12/12/2102</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography
            textAlign="center"
            variant="h5"
            fontWeight="bold"
            my={2}
            sx={{ textDecoration: "underline" }}
          >
            Repayment History
          </Typography>

          <Table>
            <TableHead>
              <TableRow bgcolor="black">
                <TableCell align="center" sx={{ color: "white" }}>
                  Scheduled On
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Amount
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Status
                </TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2, 3, 4, 5].map((index) => (
                <TableRow key={index} bgcolor={index % 2 === 0 ? "green" : "red"}>
                  <TableCell align="center">12/12/2024</TableCell>
                  <TableCell align="center">$300</TableCell>
                  <TableCell align="center">
                    {index % 2 === 0 ? "Paid" : "Unpaid"}
                  </TableCell>
                  <TableCell align="center">
                    {index % 2 !== 0 && (
                      <Button
                        onClick={handleClickOpen}
                        size="small"
                        variant="contained"
                      >
                        Pay
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default LoanDetail;
