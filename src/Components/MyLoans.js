import React from "react";
import { Box, Container, Typography } from "@mui/material";
import LoanListItem from "./LoanListItem";

const MyLoans = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" textAlign="center" mt={5}>
        Apply for Loan
      </Typography>
      <Box
        sx={{
          bgcolor: "#ECF9FF",
          boxShadow: 3,
          borderRadius: 4,
          p: 4,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: 0,
          my: 5,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <LoanListItem
            key={id}
            data={{
              id,
              amount: 1000,
              date: "12/12/2022",
              term: 4,
              status: "Ongoing",
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default MyLoans;
