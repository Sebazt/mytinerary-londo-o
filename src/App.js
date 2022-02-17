
import './App.css';
import ResponsiveAppBar from './components/navbar';
import RecipeReviewCard from './components/card';
import CarrouselImg from './components/carrousel';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'



function App() {
  
  
  return (
    <>
      <BrowserRouter>

        <ResponsiveAppBar/> {/* elemento que no va enrutado */}
        <Routes>

        {/* la primera ruta debe tener en path un valor de "/" solo una vez */}
        <Route path="/" element={<CarrouselImg/>}></Route>{/* aqui coloco el home cuando ya lo tengo */}
        <Route path="/card" element={<RecipeReviewCard/>}></Route> 
        <Route path="/carrousel" element={<CarrouselImg/>}></Route>
        <Route path="*" element={<CarrouselImg/>}></Route> {/* Esto se coloca cuando quiero que cuando no se encuentre una ruta le traiga algo en especifico, mejor home */}
        {/* en el trabajo cuando se vaya a ciudades se debe colocar pagina en construcción */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
