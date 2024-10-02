import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { Typography, Divider, Popover, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, ListItemIcon } from '@mui/material';
import Avatar1 from "/images/avatar-1.png"
import Avatar2 from "/images/avatar-2.jpeg"
import Avatar3 from "/images/avatar-3.png"
import logo from "/logo-v2.png";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar({ handleDrawerToggle }) {
  const [anchorElMessages, setAnchorElMessages] = React.useState(null);
  const [anchorElNoti, setAnchorElNoti] = React.useState(null);

  const isMessagesOpen = Boolean(anchorElMessages);
  const isNotiOpen = Boolean(anchorElNoti);

  const handleMessagesClick = (event) => {
    setAnchorElMessages(event.currentTarget);
  };

  const handleMessagesClose = () => {
    setAnchorElMessages(null);
  };

  const handleNotiClick = (event) => {
    setAnchorElNoti(event.currentTarget);
  };

  const handleNotiClose = () => {
    setAnchorElNoti(null);
  };

  const renderMessages = (
    <Popover
        anchorEl={anchorElMessages}
        open={isMessagesOpen}
        onClose={handleMessagesClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{textAlign:"center"}}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2">3 Nuevos Mensajes</Typography>
        </Box>
        <Divider />
        <List>
          <ListItem divider>
            <ListItemAvatar>
              <Avatar src={Avatar1} alt="Central" />
            </ListItemAvatar>
            <ListItemText primary="Central" secondary="Nos gustaría ser parte de este proyecto." />
          </ListItem>
          <ListItem divider>
            <ListItemAvatar>
              <Avatar src={Avatar2} alt="Granja Azul" />
            </ListItemAvatar>
            <ListItemText primary="Granja Azul" secondary="Estamos interesados." />
          </ListItem>
          <ListItem >
            <ListItemAvatar>
              <Avatar src={Avatar3} alt="Madam Tusan" />
            </ListItemAvatar>
            <ListItemText primary="Madam Tusan" secondary="Necesitamos más información." />
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Button onClick={handleMessagesClose} size="small" variant="text" color="error">Ver todos los mensajes</Button>
        </Box>
      </Popover>
  );

  const renderNotifications = (
    <Popover
        anchorEl={anchorElNoti}
        open={isNotiOpen}
        onClose={handleNotiClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{textAlign:"center"}}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2">4 Nuevas Noficaciones</Typography>
        </Box>
        <Divider />
        <List>

          <ListItem divider>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: 'error.main' }}>
                <NotificationsNoneIcon sx={{ color: 'white' }} />
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary="Nueva notificación" secondary="1 nuevo restaurante ha sido registrado" />
          </ListItem>

          <ListItem divider>
          <ListItemAvatar>
              <Avatar sx={{ backgroundColor: 'error.main' }}>
                <NotificationsNoneIcon sx={{ color: 'white' }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Nueva notificación" secondary="1 nuevo restaurante ha sido registrado" />
          </ListItem>
          <ListItem divider>
          <ListItemAvatar>
              <Avatar sx={{ backgroundColor: 'error.main' }}>
                <NotificationsNoneIcon sx={{ color: 'white' }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Nueva notificación" secondary="1 nuevo restaurante ha sido registrado" />
          </ListItem>
          <ListItem >
          <ListItemAvatar>
              <Avatar sx={{ backgroundColor: 'error.main' }}>
                <NotificationsNoneIcon sx={{ color: 'white' }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Nueva notificación" secondary="1 nuevo restaurante ha sido registrado" />
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Button onClick={handleNotiClose} size="small" variant="text" color="error">Ver todas las Notificaciones</Button>
        </Box>
      </Popover>
  );

  return (
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Search style={{background: "rgba(255,255,255,0.8)"}}
          sx={{display: {xs: "none", md: 'flex' }}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: {md: 'flex' } }}>
            <Tooltip title="Mensajes">
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleMessagesClick}>
              <Badge badgeContent={3} color="error">
                <ChatBubbleOutlineIcon />
              </Badge>
            </IconButton>
            </Tooltip>

            <Tooltip title="Notificaciones">
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleNotiClick}
            >
              <Badge badgeContent={4} color="error">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            </Tooltip>

            <Tooltip title="Foodmatch">
            <IconButton
              size="large"
              edge="end"
              aria-haspopup="true"
              color="inherit"
              component={Link} to="/"
            >
              <Avatar src={logo} alt="Foodmatch" />
            </IconButton>
            
            </Tooltip>
          </Box>
          {isMessagesOpen && renderMessages}
          {isNotiOpen && renderNotifications}
        </Toolbar>
  );
}
