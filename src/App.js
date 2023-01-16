import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SearchCarPage from './Pages/SearchCarPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailCarPage from './Pages/DetailCarPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PaymentPage from './Pages/PaymentPage';
import ProtectedRoute from './hoc/ProtectedRoute';
import PaymentConfirmPage from './Pages/PaymentConfirmPage';
import TicketPage from './Pages/TicketPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/searchcar' element={<SearchCarPage />} />
      <Route path='/detail-car/:id' element={<DetailCarPage />}/>
      <Route path='/customer-login' element={<Login />} />
      <Route path='/customer-register' element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/payment/:id' element={<PaymentPage />} />
        <Route path='/payment-confirm/:id' element={<PaymentConfirmPage />} />
        <Route path='/ticket/:id' element={<TicketPage />} />
      </Route>
    </Routes>
  );
}

export default App;
