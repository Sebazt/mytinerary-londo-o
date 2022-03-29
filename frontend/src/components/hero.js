import "../css/hero.css";
import ButonCall from '../components/calltoAct';
import Viajeimg from '../assets/viaje.png'
import Mundoimg from '../assets/mundo.png'


function HeroPag() {
  
  
    return (
      
          <div className="contenedor-hero">

              <div className="image1">
              <img src={Mundoimg} alt="viajando por el mundo" className='imagen-hero' />
              </div>
              
              <div className="buton-call">
                  <h1 className="titulo-hero">Mytinerary</h1>
                  <p className="parrafo-hero">"Find your perfect trip,
                    designed by insiders who know and love their cities!".</p>
                  <ButonCall/>
              </div>

              <div className="image2">
              <img src={Viajeimg} alt="Mapa del mundo" className='imagen-hero' />
              </div>

          </div>
     
    );
  }
  
  export default HeroPag;