import React from "react";
import {
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import LoanCard from "./LoanCard";
import { useState } from "react";

const LoanRequestsPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  // Sample data for demonstration purposes
  const loanRequests = [
    { id: 1, name: "John Doe", amount: 1000, date: "12/12/2022", term: 4, status: "Pending" },
    { id: 2, name: "Jane Smith", amount: 1500, date: "12/15/2022", term: 6, status: "Approved" },
    { id: 3, name: "Bob Johnson", amount: 800, date: "12/10/2022", term: 3, status: "Declined" },
    // Add more sample data as needed
  ];

  const filterRequests = (status) => loanRequests.filter((request) => request.status === status);

  return (
    <Container maxWidth="md">
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Loan Requests
        </Typography>
        <Tabs value={tabValue}   variant="scrollable"
  scrollButtons="auto" onChange={handleChangeTab} centered>
          <Tab label="All Requests" />
          <Tab label="Pending Requests" />
          <Tab label="Active Loans" />
          <Tab label="Declined Requests" />
        </Tabs>
        <Grid container spacing={4}>
          {tabValue === 0 && loanRequests.map((request) => (
            <LoanCard key={request.id} data={request} />
          ))}
          {tabValue === 1 && filterRequests("Pending").map((request) => (
            <LoanCard key={request.id} data={request} />
          ))}
          {tabValue === 2 && filterRequests("Approved").map((request) => (
            <LoanCard key={request.id} data={request} />
          ))}
          {tabValue === 3 && filterRequests("Declined").map((request) => (
            <LoanCard key={request.id} data={request} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default LoanRequestsPage;
