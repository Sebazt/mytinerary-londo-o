
import './App.css';
import NavBar from './components/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import FooterPag from './components/footer';
import HomePag from './pages/home';
import PagCities from './pages/cities';





function App() {
  
  
  return (
    <BrowserRouter>
    <div>       
      <NavBar/>
      <Routes>
        
        <Route path='/' element={<HomePag/>}/>
        <Route path='/home' element={<HomePag/>}/>
        <Route path='*' element={<HomePag/>}/>  {/* si hay un error general */}
        <Route path='/cities' element={<PagCities/>}/>
      </Routes>
      <FooterPag/>
    </div>
    </BrowserRouter>
  );
}

export default App;
