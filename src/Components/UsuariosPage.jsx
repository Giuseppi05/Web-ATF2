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
  { field: 'firstName', headerName: 'Nombre', width: 130, disableColumnMenu: true },
  { field: 'lastName', headerName: 'Apellido', width: 130, disableColumnMenu: true },
  { field: 'age', headerName: 'Edad', type: 'number', width: 90, disableColumnMenu: true },
  { field: 'email', headerName: 'Email', width: 200, disableColumnMenu: true },
  { field: 'lastActive', headerName: 'Última Actividad', width: 160, disableColumnMenu: true, type: 'date' },
  { field: 'matches', headerName: 'Matches', type: 'number', width: 100, disableColumnMenu: true },
  {
    field: 'actions',
    headerName: 'Acciones',
    type: 'actions',
    width: 100,
    disableColumnMenu: true,
    renderCell: (row) => (
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
  { id: 1, lastName: 'García', firstName: 'Ana', age: 28, email: 'ana.garcia@email.com', lastActive: new Date(2023, 9, 15), matches: 12 },
  { id: 2, lastName: 'Rodríguez', firstName: 'Carlos', age: 35, email: 'carlos.rodriguez@email.com', lastActive: new Date(2023, 9, 16), matches: 8 },
  { id: 3, lastName: 'Martínez', firstName: 'Laura', age: 31, email: 'laura.martinez@email.com', lastActive: new Date(2023, 9, 14), matches: 15 },
  { id: 4, lastName: 'López', firstName: 'Miguel', age: 42, email: 'miguel.lopez@email.com', lastActive: new Date(2023, 9, 13), matches: 6 },
  { id: 5, lastName: 'Fernández', firstName: 'Sofía', age: 26, email: 'sofia.fernandez@email.com', lastActive: new Date(2023, 9, 16), matches: 10 },
  { id: 6, lastName: 'Sánchez', firstName: 'Diego', age: 39, email: 'diego.sanchez@email.com', lastActive: new Date(2023, 9, 15), matches: 9 },
  { id: 7, lastName: 'Pérez', firstName: 'Elena', age: 33, email: 'elena.perez@email.com', lastActive: new Date(2023, 9, 14), matches: 11 },
  { id: 8, lastName: 'González', firstName: 'Javier', age: 29, email: 'javier.gonzalez@email.com', lastActive: new Date(2023, 9, 16), matches: 7 },
  { id: 9, lastName: 'Ruiz', firstName: 'Carmen', age: 37, email: 'carmen.ruiz@email.com', lastActive: new Date(2023, 9, 15), matches: 14 },
  { id: 10, lastName: 'Díaz', firstName: 'Alberto', age: 45, email: 'alberto.diaz@email.com', lastActive: new Date(2023, 9, 13), matches: 5 },
  { id: 11, lastName: 'Moreno', firstName: 'Isabel', age: 30, email: 'isabel.moreno@email.com', lastActive: new Date(2023, 9, 16), matches: 13 },
  { id: 12, lastName: 'Muñoz', firstName: 'Raúl', age: 34, email: 'raul.munoz@email.com', lastActive: new Date(2023, 9, 15), matches: 8 },
  { id: 13, lastName: 'Álvarez', firstName: 'Marta', age: 27, email: 'marta.alvarez@email.com', lastActive: new Date(2023, 9, 14), matches: 10 },
  { id: 14, lastName: 'Romero', firstName: 'Andrés', age: 41, email: 'andres.romero@email.com', lastActive: new Date(2023, 9, 16), matches: 6 },
  { id: 15, lastName: 'Alonso', firstName: 'Lucía', age: 36, email: 'lucia.alonso@email.com', lastActive: new Date(2023, 9, 15), matches: 12 },
  { id: 16, lastName: 'Gutiérrez', firstName: 'Pablo', age: 32, email: 'pablo.gutierrez@email.com', lastActive: new Date(2023, 9, 13), matches: 9 },
  { id: 17, lastName: 'Navarro', firstName: 'Cristina', age: 29, email: 'cristina.navarro@email.com', lastActive: new Date(2023, 9, 16), matches: 11 },
  { id: 18, lastName: 'Torres', firstName: 'Fernando', age: 38, email: 'fernando.torres@email.com', lastActive: new Date(2023, 9, 15), matches: 7 },
  { id: 19, lastName: 'Domínguez', firstName: 'Beatriz', age: 25, email: 'beatriz.dominguez@email.com', lastActive: new Date(2023, 9, 14), matches: 14 },
  { id: 20, lastName: 'Vázquez', firstName: 'Ricardo', age: 43, email: 'ricardo.vazquez@email.com', lastActive: new Date(2023, 9, 16), matches: 5 },
];

const paginationModel = { page: 0, pageSize: 5 };


const UsuariosPage = () => {
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
          Usuarios
          </Typography> 

          <Typography 
          sx={{ 
            marginBottom: '20px', 
            color: '#333', 
            textAlign: {xs:"center",md:"start"} }}
          > 
          Dashboard / Páginas / Usuarios
          </Typography> 
        </Box>

        <Box sx={{display: "flex", height: "30%", m:2, justifyContent: "center"}}>
          <Button
            variant="contained"
            color="error"
            size="medium"
          >
            < AddIcon sx={{mr: 1}}/>
            Usuario
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
          Usuarios
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

export default UsuariosPage;