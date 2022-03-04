import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  {getAllCities, cargarDatos, eliminarCiudad, modifyCity}  from '../apiCalls'

/* Este componente se ubica en la app con fines de testear algunos controladores, pero no hace parte oficial del mismo. Antes de entregar el proyecto completo, se organizara  */

export default function FromMyApi(){
const [cities, setCities] = useState()
const [reload, setReload] = useState(false)
const [modid, setModId]= useState()

function deleteCiudad(id){
    eliminarCiudad(id)
    setReload(!reload)
}
const modificarDB = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    var dataInput ={
      nombre: data.get('Ciudad'),
      pais: data.get('Pais'),
      descripcion:data.get('Descripcion')
    };
    
    modifyCity(modid, dataInput)
    setReload(!reload)
  };

const handleSubmit = (event) => {
    event.preventDefault(); /* new me crea una instancia nueva como constructor .preve... es para que no refresque la pagina*/
    const data = new FormData(event.currentTarget);    
    /* cuando se hace el submit se envia en el parametro event, y el preventDefault es para que no recargue la pág.  */
    var dataInput ={
      ciudad: data.get('Ciudad'),
      pais: data.get('Pais')
    };
    
    cargarDatos(dataInput) /* se le va pasar los datos a la función cargar datos desde lo que se ingreso en el input */
    setReload(!reload)

  };

useEffect(()=>{
getAllCities()
.then(response=>setCities(response.data.response.ciudades))

},[reload])
  
    return(
<div>

<div>
{cities?.map(city=>
 <ul>
  <li>{city.nombre}, {city.pais}, {city.descripcion} 
  <div>
  <div><button onClick={()=>deleteCiudad(city._id)}>DELETE</button></div>
  <div><button onClick={()=>setModId(city._id)}>Modifi</button></div>
  </div>
  </li>
</ul>
 

)}

     
</div>
<div>
    <h1>POST DATOS CITIES</h1>

   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Ciudad"
                  name="Ciudad"
                  required
                  fullWidth
                  id="Ciudad"
                  label="Ciudad"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Pais"
                  label="Pais"
                  name="Pais"
                  autoComplete="Pais"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Descripcion"
                  label="Descripcion"
                  name="Descripcion"
                  autoComplete="Descripcion"
                />
              </Grid>
             
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SEND DATA
            </Button>
           
          </Box>
        </Box>
       
      </Container>
   
</div>
<div>
    <h1>MODIFICAR DATOS DESDE FRONT END EN DB</h1>

   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box component="form" noValidate onSubmit={modificarDB} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Ciudad"
                  name="Ciudad"
                  required
                  fullWidth
                  id="Ciudad"
                  label="Ciudad"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Pais"
                  label="Pais"
                  name="Pais"
                  autoComplete="Pais"
                />
              </Grid>
                    
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SEND DATA
            </Button>
           
          </Box>
        </Box>
       
      </Container>
   
</div>
</div>
    )
}




