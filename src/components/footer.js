import React from "react";
import "../css/footer.css"
import { MDBFooter } from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link as LinkRouter } from 'react-router-dom'
import Logo from '../assets/logo.png'

export default function FooterPag() {
  return (    
     
      <footer className='div-footer'>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3 '>


            {/* bloq num 1 */}

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4  divNum1'>
              
            <LinkRouter to="home">
              <img src={Logo} alt="logo" className='logofooter' />
            </LinkRouter>
              
            </div>



            {/* bloq num 2 */}

            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 divNum2'>
              <h6 className='text-uppercase fw-bold mb-4 subh6'>
                Mytinerary
              </h6>
              <p>"I'm not from here, I'm not from there, I have no age, no future, and being happy is my color of identity."</p>
              <p className="autor">Facundo Cabral</p>
              
            </div>

            {/* bloq num 3 */}

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 divNum3'>
              <h6 className='text-uppercase fw-bold mb-4'>Menu</h6>
              <div className="menu-footer">
                <LinkRouter to="home" className="linkFooter">
                  Home
                </LinkRouter>
                <LinkRouter to="home" className="linkFooter">
                  Cities
                </LinkRouter>
              </div>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 divNum4'>
              <h6 className='text-uppercase fw-bold mb-4'>Social red</h6>
              <div className="redes">
                <a href='"https://www.linkedin.com/in/juan-sebastian-londo%C3%B1o-cossio-9444781b7/' target="__BLANK" className='me-4 text-reset red-btn'>
                  <LinkedInIcon />
                </a>
                <a href='https://github.com/Sebazt' target="__BLANK" className='me-4 text-reset'>
                  <GitHubIcon />
                </a>
                <a href='#' target="__BLANK" className='me-4 text-reset'>
                  <FacebookOutlinedIcon />
                </a>
                <a href='https://www.instagram.com/zetasebast10/' target="__BLANK" className='me-4 text-reset'>
                  <InstagramIcon />
                </a>
              </div>
              <div className="copyr"><p>| © 2022 Copyright: Sebastian Londoño |</p></div>
              
            </div>

          </div>
        </div>
      </footer>


    
  );
}