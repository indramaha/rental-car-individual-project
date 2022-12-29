import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SearchCarPage from './Pages/SearchCarPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailCarPage from './Pages/DetailCarPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/searchcar' element={<SearchCarPage />} />
      <Route path='/detail-car' element={<DetailCarPage />}/>
    </Routes>
  );
}

export default App;
