import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import Restaurant from './pages/Restaurant';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/restaurants/:id' element={<Restaurant />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
