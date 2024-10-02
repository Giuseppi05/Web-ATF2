import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Person, Restaurant, Favorite, TrendingUp, TrendingDown } from '@mui/icons-material';
import { Box, Typography, Divider, Button, IconButton, Popover, List, ListItem, ListItemText } from '@mui/material';
import {  PieChart, Pie, AreaChart, Area, Cell } from 'recharts';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import LoopIcon from '@mui/icons-material/Loop';
import FilterListIcon from '@mui/icons-material/FilterList';

const monthlyData = [
  { month: 'Ene', usuarios: 1000, restaurantes: 50, matches: 1500 },
  { month: 'Feb', usuarios: 1200, restaurantes: 60, matches: 1800 },
  { month: 'Mar', usuarios: 1500, restaurantes: 75, matches: 2300 },
  { month: 'Abr', usuarios: 1800, restaurantes: 90, matches: 2800 },
  { month: 'May', usuarios: 2200, restaurantes: 110, matches: 3500 },
  { month: 'Jun', usuarios: 2600, restaurantes: 130, matches: 4200 },
];

const topCuisines = [
  { name: 'Pollería', count: 450 },
  { name: 'Cevicheria', count: 380 },
  { name: 'Chifa', count: 320 },
  { name: 'Criollo', count: 280 },
  { name: 'Amazonico', count: 250 },
];

const restaurantRatings = [
  { name: '5 estrellas', value: 120 },
  { name: '4 estrellas', value: 180 },
  { name: '3 estrellas', value: 60 },
  { name: '2 estrellas', value: 20 },
  { name: '1 estrella', value: 10 },
];

const hourlyActivity = [
  { hour: '00:00', usuarios: 50 },
  { hour: '03:00', usuarios: 20 },
  { hour: '06:00', usuarios: 30 },
  { hour: '09:00', usuarios: 100 },
  { hour: '12:00', usuarios: 250 },
  { hour: '15:00', usuarios: 200 },
  { hour: '18:00', usuarios: 300 },
  { hour: '21:00', usuarios: 180 },
];

const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const cardHeaderStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333',
};

const cardContentStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '5px',
};

const cardFooterStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
};

const IconWrapper = ({ color, children }) => (
  <div style={{ backgroundColor: color, padding: '8px', borderRadius: '50%', marginRight: '10px', display: "flex", alignItems: "center" }}>
    {children}
  </div>
);

const StatCard = ({ title, value, change, Icon, color }) => {
  const isPositive = change > 0;
  return (
    <div style={cardStyle}>
      <div style={cardHeaderStyle}>{title}</div>
      <div style={cardContentStyle}>{value.toLocaleString()}</div>
      <div style={cardFooterStyle}>
        <IconWrapper color={color}>
          <Icon style={{ color: 'white' }} />
        </IconWrapper>
        <span style={{ color: isPositive ? 'green' : 'red', display: 'flex', alignItems: 'center' }}>
          {isPositive ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
          {Math.abs(change)}% desde el mes pasado
        </span>
      </div>
    </div>
  );
};

const FoodMatchDashboard = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'center', mt: 3}}>
      <Box sx={{display: "flex",justifyContent: "space-between", flexDirection: {xs: "column", md: "row"} }}>
        <Box>
          <Typography 
          variant='h5' 
          sx={{ 
            marginBottom: '20px', 
            color: '#333', 
            textAlign: {xs:"center",md:"start"},
            fontWeight: "bold"
           }}
          > 
          FoodMatch Dashboard
          </Typography> 

          <Typography 
          sx={{ 
            marginBottom: '20px', 
            color: '#333', 
            textAlign: {xs:"center",md:"start"} }}
          > 
          Bienvenido al Dashboard, consulta tus datos y gráficos de forma fácil y rápida
          </Typography> 
        </Box>

        <Box sx={{display: "flex", height: "30%", m:2, justifyContent: "center"}}>
            <IconButton
              color="error"
              size="small"
              sx={{ mr: 1 }}
            >
              <LoopIcon />
            </IconButton>
            <IconButton
              color="error"
              size="small"
              sx={{ mr: 1 }}
            >
              <FilterListIcon />
            </IconButton>

          <Button
            variant="contained"
            color="error"
            size="medium"
            onClick={handleClick}
          >
            Hoy: 3 de Octubre
          </Button>
            <Popover
            id="date-range-popover"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            PaperProps={{
              style: {
                padding: '10px',
                width: '170px',
              },
            }}
          >
            <List component="nav">
              <ListItem button onClick={handleClose}>
                <ListItemText primary="Hoy" />
              </ListItem>
              <ListItem button onClick={handleClose}>
                <ListItemText primary="Ayer" />
              </ListItem>
              <ListItem button onClick={handleClose}>
                <ListItemText primary="Últimos 7 días" />
              </ListItem>
              <ListItem button onClick={handleClose}>
                <ListItemText primary="Últimos 30 días" />
              </ListItem>
              <ListItem button onClick={handleClose}>
                <ListItemText primary="Este mes" />
              </ListItem>
              <ListItem button onClick={handleClose}>
                <ListItemText primary="Mes pasado" />
              </ListItem>
            </List>
        </Popover>
        </Box>
      </Box>
      <Divider />
      <Box 
        sx={{ 
          display: 'grid', 
          gap: '20px', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          mt: 3
        }}
      >
        <StatCard title="Usuarios Totales" value={2600} change={18.18} Icon={Person} color="#4CAF50" />
        <StatCard title="Restaurantes Registrados" value={130} change={18.18} Icon={Restaurant} color="#2196F3" />
        <StatCard title="Matches Realizados" value={4200} change={20} Icon={Favorite} color="#E91E63" />
        <StatCard title="Nuevas Descargas" value={5000} change={30} Icon={FileDownloadOutlinedIcon} color="#ff9a11" />
      </Box>

      <Box
        sx={{ 
          display: 'grid', 
          gap: '20px', 
          gridTemplateColumns: { xs: '1fr', md: '5fr 5fr' }, 
          gridTemplateRows: 'auto auto',
          marginTop: '20px'
        }}
      >
        <Box sx={{ ...cardStyle }}>
          <Box sx={cardHeaderStyle}>Crecimiento Mensual</Box>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="usuarios" stroke="#4CAF50" activeDot={{ r: 8 }} />
              <Line yAxisId="right" type="monotone" dataKey="restaurantes" stroke="#2196F3" activeDot={{ r: 8 }} />
              <Line yAxisId="left" type="monotone" dataKey="matches" stroke="#E91E63" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ ...cardStyle }}>
          <Box sx={cardHeaderStyle}>Top 5 Tipos de Restaurantes</Box>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topCuisines}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      <Box
        sx={{ 
          display: 'grid', 
          gap: '20px', 
          gridTemplateColumns: { xs: '1fr', md: '7fr 3fr' }, 
          gridTemplateRows: 'auto auto',
          marginTop: '20px'
        }}
      >
        <Box sx={{ ...cardStyle }}>
          <Box sx={cardHeaderStyle}>Actividad de Usuarios por Hora</Box>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={hourlyActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="usuarios" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ ...cardStyle }}>
          <Box sx={cardHeaderStyle}>Distribución de Calificaciones de Restaurantes</Box>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={restaurantRatings}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {restaurantRatings.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default FoodMatchDashboard;