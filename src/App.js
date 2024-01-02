import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import RequestLoan from './Components/RequestLoan';
import MyLoans from './Components/MyLoans';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Header />
    <Routes>
    <Route path='/' element={< Home />} />
    <Route path='/Request Loan' element={< RequestLoan />} />
    <Route path='/My Loans' element={< MyLoans />} />
    </Routes>
  </Router>
  );

}

export default App;
