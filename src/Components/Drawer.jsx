import * as React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Dashboard from '@mui/icons-material/Dashboard';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import "../assets/css/Drawer.css";
import logo from "/logo-v2.png";
import PrimarySearchAppBar from './PrimarySearchAppBar';
import FoodMatchDashboard from "./FoodMatchDashboard";
import RestaurantsPage from "./RestaurantsPage";  
import UsuariosPage from "./UsuariosPage";          
import Footer from "./Footer";          

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className="customMenu">
      <Toolbar 
        sx={{my:2}} 
        className="logo" 
        component={Link} to="/" 
        onClick={handleDrawerClose}>
        <img src={logo} alt="Logo" style={{ width: '100%' }} />
      </Toolbar>

      <Typography variant="subtitle2" className="sub">
        Páginas
      </Typography>

      <List>
        <ListItem key={"Dashboard"} disablePadding onClick={handleDrawerClose}>
          <ListItemButton component={Link} to="/">
            <ListItemIcon><Dashboard /></ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"Restaurantes"} disablePadding onClick={handleDrawerClose}>
          <ListItemButton component={Link} to="/restaurants">
            <ListItemIcon><RestaurantMenuIcon /></ListItemIcon>
            <ListItemText primary={"Restaurantes"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"Usuarios"} disablePadding onClick={handleDrawerClose}>
          <ListItemButton component={Link} to="/users">
            <ListItemIcon><GroupIcon /></ListItemIcon>
            <ListItemText primary={"Usuarios"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Router>
      <Box sx={{ display: 'flex', width: "100%", boxSizing: "border-box" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className="customAppBar"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <PrimarySearchAppBar handleDrawerToggle={handleDrawerToggle} />
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={{ pt: 8, px: 5, width: { sm: `calc(100% - ${drawerWidth}px)` }, boxSizing: "border-box" }}
        >
          <Routes>
            <Route path="/" element={<FoodMatchDashboard />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/users" element={<UsuariosPage />} />
          </Routes>
          <Footer />
        </Box>

      </Box>
      
    </Router>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;