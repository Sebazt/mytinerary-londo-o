
import './App.css';
import NavBar from './components/navbar';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/footer';
import HomePag from './pages/home';






function App() {
  
  
  return (
    <>       
      <NavBar/> 
        
      <HomePag/>

      <Footer/>
    </>
  );
}

export default App;
