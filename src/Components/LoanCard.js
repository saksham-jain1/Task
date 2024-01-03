import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const LoanCard = ({ data, showActions }) => {

  const { name, amount, date, term, status } = data;

  const handleAcceptRequest = () => {
    // Implement your logic for accepting the loan request
  };

  const handleRejectRequest = () => {
    // Implement your logic for rejecting the loan request
  };

  return (
    <Grid item xs={12} sm={6} md={4} >
      <Card sx={{ boxShadow: 3, borderRadius: 4, transition: "transform 0.2s" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Amount: ${amount}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Date: {date}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Term: {term} weeks
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Status: {status}
          </Typography>
        </CardContent>
        {status === "Pending" && (
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleAcceptRequest}
            >
              Accept
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleRejectRequest}
              sx={{ ml: 1 }}
            >
              Reject
            </Button>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
};

export default LoanCard;
