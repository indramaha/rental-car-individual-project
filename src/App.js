import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SearchCarPage from './Pages/SearchCarPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/searchcar' element={<SearchCarPage />} />
    </Routes>
  );
}

export default App;
