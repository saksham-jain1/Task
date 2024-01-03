import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

const RequestLoan = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);

  const handleLoanAmountChange = (event) => {
    const amount = parseInt(event.target.value, 10);
    setLoanAmount(amount < 0 ? 0 : amount);
  };

  const handleLoanTermChange = (event) => {
    const term = parseInt(event.target.value, 10);
    setLoanTerm(term < 0 ? 0 : term);
  };

  const handleSubmit = () => {
    
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          bgcolor: "#ECF9FF",
          boxShadow: 3,
          borderRadius: 4,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          mt: 5,
        }}
      >
        <Typography variant="h4" color="primary">
          Apply for Loan
        </Typography>
        <FormControl sx={{ width: "100%" }}>
          <FormLabel>Name:</FormLabel>
          <TextField value="Samyak" variant="outlined" size="small" disabled />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <FormLabel>Email:</FormLabel>
          <TextField
            value="Samyak@gmail.com"
            variant="outlined"
            size="small"
            disabled
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <FormLabel>Loan Start Date:</FormLabel>
          <TextField
            type="date"
            value={currentDate}
            variant="outlined"
            size="small"
            disabled
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <FormLabel>Loan Amount:</FormLabel>
          <OutlinedInput
            type="number"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            variant="outlined"
            size="small"
            value={loanAmount}
            onChange={handleLoanAmountChange}
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <FormLabel>Loan Term:</FormLabel>
          <TextField
            type="number"
            variant="outlined"
            size="small"
            value={loanTerm}
            onChange={handleLoanTermChange}
          />
          <FormHelperText>**No of weeks to repay the loan</FormHelperText>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default RequestLoan;
