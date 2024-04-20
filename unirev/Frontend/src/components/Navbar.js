import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar({ isLoggedIn, onLogin }) {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          UniView
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/universities">University</Button>
        <Button color="inherit" component={Link} to="/faculty">Faculty</Button>
        {isLoggedIn ? (
          <Button color="inherit" onClick={() => {
            onLogin(false);  // Set isLoggedIn to false
            localStorage.setItem('isLoggedIn', 'false');  // Update local storage
            navigate('/login');  // Navigate to login page after logout
          }}>Log Out</Button>
        ) : (
          <Button color="inherit" onClick={() => navigate('/login')}>Log In/Sign Up</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
