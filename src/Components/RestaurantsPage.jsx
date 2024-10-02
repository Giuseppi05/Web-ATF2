import React from 'react';
import { Box, Typography, Divider, Button, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import FilterListIcon from '@mui/icons-material/FilterList';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
    { field: 'id', headerName: 'ID', width: 70, disableColumnMenu: true },
    { field: 'nombre', headerName: 'Nombre', width: 200, disableColumnMenu: true },
    { field: 'tipo', headerName: 'Tipo de Cocina', width: 150, disableColumnMenu: true },
    { field: 'distrito', headerName: 'Distrito', width: 130, disableColumnMenu: true },
    { field: 'precioPromedio', headerName: 'Precio Promedio', type: 'number', width: 150, disableColumnMenu: true },
    { field: 'calificacion', headerName: 'Calificación', type: 'number', width: 120, disableColumnMenu: true },
    { field: 'capacidad', headerName: 'Capacidad', type: 'number', width: 100, disableColumnMenu: true },
    { field: 'fundacion', headerName: 'Año de Fundación', type: 'number', width: 150, disableColumnMenu: true },
    { field: 'platoPrincipal', headerName: 'Plato Principal', width: 180, disableColumnMenu: true },
    {
      field: 'actions',
      headerName: 'Acciones',
      type: 'actions',
      width: 100,
      disableColumnMenu: true,
      renderCell: (params) => (
        <>
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="Ver"
          />
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Eliminar"
          />
        </>
      ),
    },
  ];
  
  const rows = [
    { id: 1, nombre: 'Astrid y Gastón', tipo: 'Fusión', distrito: 'San Isidro', precioPromedio: 250, calificacion: 4.8, capacidad: 80, fundacion: 1994, platoPrincipal: 'Cuy Pekín' },
    { id: 2, nombre: 'La Mar', tipo: 'Cevichería', distrito: 'Miraflores', precioPromedio: 120, calificacion: 4.6, capacidad: 100, fundacion: 2005, platoPrincipal: 'Ceviche Mixto' },
    { id: 3, nombre: 'Maido', tipo: 'Nikkei', distrito: 'Miraflores', precioPromedio: 280, calificacion: 4.9, capacidad: 60, fundacion: 2009, platoPrincipal: 'Nigiri de Paiche' },
    { id: 4, nombre: 'El Rincón Que No Conoces', tipo: 'Criolla', distrito: 'Lince', precioPromedio: 70, calificacion: 4.5, capacidad: 50, fundacion: 1978, platoPrincipal: 'Ají de Gallina' },
    { id: 5, nombre: 'Isolina', tipo: 'Taberna', distrito: 'Barranco', precioPromedio: 90, calificacion: 4.7, capacidad: 40, fundacion: 2015, platoPrincipal: 'Seco de Res' },
    { id: 6, nombre: 'Fiesta', tipo: 'Norteña', distrito: 'Miraflores', precioPromedio: 150, calificacion: 4.6, capacidad: 70, fundacion: 1996, platoPrincipal: 'Cabrito a la Norteña' },
    { id: 7, nombre: 'Rafael', tipo: 'Autor', distrito: 'Miraflores', precioPromedio: 200, calificacion: 4.7, capacidad: 55, fundacion: 2000, platoPrincipal: 'Arroz con Pato' },
    { id: 8, nombre: 'Osso', tipo: 'Carnes', distrito: 'San Isidro', precioPromedio: 180, calificacion: 4.8, capacidad: 65, fundacion: 2013, platoPrincipal: 'Tomahawk Steak' },
    { id: 9, nombre: 'Panchita', tipo: 'Criolla', distrito: 'Miraflores', precioPromedio: 100, calificacion: 4.5, capacidad: 120, fundacion: 2008, platoPrincipal: 'Anticuchos' },
    { id: 10, nombre: 'Malabar', tipo: 'Amazónica', distrito: 'San Isidro', precioPromedio: 170, calificacion: 4.6, capacidad: 60, fundacion: 2004, platoPrincipal: 'Paiche en Salsa de Tucupi' },
    { id: 11, nombre: 'La Picantería', tipo: 'Regional', distrito: 'Surquillo', precioPromedio: 110, calificacion: 4.7, capacidad: 45, fundacion: 2012, platoPrincipal: 'Chupe de Camarones' },
    { id: 12, nombre: 'Cosme', tipo: 'Fusión', distrito: 'San Isidro', precioPromedio: 130, calificacion: 4.5, capacidad: 70, fundacion: 2017, platoPrincipal: 'Tacu Tacu de Pato' },
    { id: 13, nombre: 'Señorio de Sulco', tipo: 'Criolla', distrito: 'Miraflores', precioPromedio: 95, calificacion: 4.4, capacidad: 80, fundacion: 1986, platoPrincipal: 'Lomo Saltado' },
    { id: 14, nombre: 'Kjolle', tipo: 'Autor', distrito: 'Barranco', precioPromedio: 220, calificacion: 4.8, capacidad: 50, fundacion: 2018, platoPrincipal: 'Tubérculos en Texturas' },
    { id: 15, nombre: 'El Mercado', tipo: 'Pescados y Mariscos', distrito: 'Miraflores', precioPromedio: 140, calificacion: 4.6, capacidad: 75, fundacion: 2010, platoPrincipal: 'Arroz con Mariscos' },
    { id: 16, nombre: 'Huaca Pucllana', tipo: 'Novo Andina', distrito: 'Miraflores', precioPromedio: 160, calificacion: 4.5, capacidad: 100, fundacion: 2000, platoPrincipal: 'Alpaca a la Parrilla' },
    { id: 17, nombre: 'Mayta', tipo: 'Contemporánea', distrito: 'Miraflores', precioPromedio: 190, calificacion: 4.7, capacidad: 60, fundacion: 2008, platoPrincipal: 'Costillas de Cerdo en Chicha' },
    { id: 18, nombre: 'Statera', tipo: 'Autor', distrito: 'San Isidro', precioPromedio: 210, calificacion: 4.8, capacidad: 40, fundacion: 2018, platoPrincipal: 'Pesca del Día en Emulsión de Rocoto' },
    { id: 19, nombre: 'Mérito', tipo: 'Venezolana-Peruana', distrito: 'Barranco', precioPromedio: 130, calificacion: 4.6, capacidad: 45, fundacion: 2018, platoPrincipal: 'Arepa de Chupe' },
    { id: 20, nombre: 'Siete', tipo: 'Fusión', distrito: 'Barranco', precioPromedio: 140, calificacion: 4.5, capacidad: 55, fundacion: 2019, platoPrincipal: 'Tiradito de Atún' },
  ];

const paginationModel = { page: 0, pageSize: 5 };


const RestaurantsPage = () => {
  return (
    <Box sx={{ width: '100%', textAlign: 'center', mt: 3}}>
      <Box sx={{display: "flex",justifyContent: "space-between" }}>
        <Box>
          <Typography 
          variant='h5' 
          sx={{ 
            marginBottom: '20px', 
            color: '#333', 
            textAlign: "start",
            fontWeight: "bold"
         }}> 
          Restaurantes
          </Typography> 

          <Typography 
          sx={{ 
            marginBottom: '20px', 
            color: '#333', 
            textAlign: {xs:"center",md:"start"} }}
          > 
          Dashboard / Páginas / Restaurantes
          </Typography> 
        </Box>

        <Box sx={{display: "flex", height: "30%", m:2, justifyContent: "center"}}>
          <Button
            variant="contained"
            color="error"
            size="medium"
          >
            < AddIcon sx={{mr: 1}}/>
            Restaurante
          </Button>
           
        </Box>
      </Box>
      <Divider sx={{mb: 2}}/>
      
      <Box sx={{ maxWidth: '100vw',  backgroundColor: "white", overflowX: "auto" }}>
      <Box sx={{display: "flex",justifyContent: "space-between" }}>
        <Box sx={{display: "flex",alignItems: "center" }}>
          <Typography 
          variant='h6' 
          sx={{  
            color: '#333', 
            textAlign: "start",
            fontWeight: "390"
         }}> 
          Restaurantes
          </Typography> 
        </Box>

        <Box sx={{display: "flex", height: "30%", m:2, justifyContent: "center"}}>
          <IconButton
                color="error"
                size="small"
                sx={{ mr: 1 }}
              >
                <FilterListIcon />
          </IconButton>
           
        </Box>
      </Box>

        <Paper sx={{ width: '100%', textAlign: 'center'}}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{
              border: 0,
              '& .MuiTablePagination-selectLabel': {
                display: 'block !important',
              },
              '& .MuiTablePagination-input': {
                display: 'inline-flex !important',
              },
            }}
          />
        </Paper>
      </Box>
    </Box>

    );
};

export default RestaurantsPage;