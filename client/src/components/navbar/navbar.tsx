import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import mscs_logo from '../../assets/MSCS_LOGO.png'
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{width:'100%',borderBottom:'1px solid white'}}>
      <Container maxWidth="lg" >
        <Toolbar disableGutters >
          <Box sx={{ display: 'flex' }}>
            <img src={mscs_logo} alt="mscs logo" style={{maxWidth:'4%'}} />&nbsp;&nbsp;&nbsp;
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                // mr: 2,
                // display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                // fontWeight: 100, 
                letterSpacing: '.01rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            > 	
              MULTI-STATE CO-OPERATIVE SOCIETIES 
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar/>
              </IconButton>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;