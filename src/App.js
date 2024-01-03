import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import RequestLoan from "./Components/RequestLoan";
import MyLoans from "./Components/MyLoans";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import LoanDetail from "./Components/LoanDetail";
import LoanRequest from "./Components/LoanRequest";
import Login from "./Components/Login";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <>
      <div style={{ height: "max-content", minHeight: "92vh" }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requestLoan" element={<RequestLoan />} />
            <Route path="/loanRequests" element={<LoanRequest />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myLoans" element={<MyLoans />} />
            <Route path="/loan/:id" element={<LoanDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
