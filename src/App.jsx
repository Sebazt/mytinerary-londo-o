
import './App.css';
import NavBar from './components/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import FooterPag from './components/footer';
import HomePag from './pages/home';
import PagCities from './pages/cities';
import CardDetails from './components/detalle';





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
        <Route path='/cities/details/:id' element={<CardDetails/>}/>


      </Routes>
      <FooterPag/>
    </div>
    </BrowserRouter>
  );
}

export default App;
