import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Usuario from '../assets/usuario.png'
import "../css/navbar.css"
import { Link as LinkRouter } from 'react-router-dom'
import { connect } from "react-redux"
import userActions from '../redux/actions/usersActions'



/* const settings = [
  <LinkRouter className='boton-header' to={"/signup"}>Sign Up</LinkRouter>,
  <LinkRouter className='boton-header' to={"/signin"}>Sign In</LinkRouter>]; */

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  /* when window scrolling */
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  
  function SignOut(){
    console.log(props.user.email)
    props.signOutUser(props.user.email)
    
  }
  window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <AppBar position="sticky" sx={{ backgroundColor: "#0001" }} className="Navbar navbar">
        <Container maxWidth="xl">
          <Toolbar disableGutters >
            {/* <Typography>
          <img src={Logo} alt="logo" width={100} />
          </Typography> */}

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
              <IconButton /* boton hamburgesa */
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"            >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* menu responsivo y funcional */}
                <MenuItem >
                  <LinkRouter className='boton-header' to={"/home"}>Home</LinkRouter>
                </MenuItem>

                <MenuItem >
                  <LinkRouter className='boton-header' to={"/cities"} >Cities</LinkRouter>
                </MenuItem>

              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>

              <LinkRouter className='boton-header' to="home">
                <Button className='boton-a'>Home</Button>
              </LinkRouter>

              <LinkRouter className='boton-header' to="cities">
                <Button className='boton-a'>Cities</Button>
              </LinkRouter>

            </Box>
            {console.log(props.user)}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                {
                  props.user ? (
                    <div>
                      <span className='firtsName'>{props.user.firstName}</span> 
                      <IconButton className="usuario-btn" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar className="usuario-btn" src={props.user.photoURL} alt="usuario" />
                      </IconButton>
                    </div>
                  ) : (
                    <IconButton className="usuario-btn" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar className="usuario-btn" src={Usuario} alt="usuario" />
                    </IconButton>

                  )
                }
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {props.user ? (
                  <MenuItem onClick={handleCloseUserMenu} className="contenedor-butons">
                    <Typography textAlign="center"><LinkRouter className='boton-header' to={"/home"}>???Seetings</LinkRouter></Typography>
                    <Typography textAlign="center"><LinkRouter className='boton-header' onClick={SignOut}to={"#"}>Sign Out</LinkRouter></Typography>
                  </MenuItem>
                 ) : (

                    <div>
                      <MenuItem  onClick={handleCloseUserMenu}>                        
                      <Typography textAlign="center"><LinkRouter className='boton-header' to={"/signup"}>Sign Up</LinkRouter></Typography>
                      </MenuItem>

                      <MenuItem  onClick={handleCloseUserMenu}>                        
                      <Typography textAlign="center"><LinkRouter className='boton-header' to={"/signin"}>Sign In</LinkRouter></Typography>
                      </MenuItem>
                    </div>
                  )
                }
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = {
  signOutUser: userActions.signOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);


