import React, { useState, useEffect } from 'react';
import './Login.css';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const Login = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    generateBubbles();
  }, []);

  const getRandomPosition = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const generateBubbles = () => {
    const numBubbles = 25; // Number of bubbles
    const newBubbles = [];

    for (let i = 0; i < numBubbles; i++) {
      const size = Math.floor(Math.random() * 80) + 20; // Random size between 20 and 100 pixels
      const style = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${getRandomPosition(0, 100)}%`, // Random left position
        animationDuration: `${Math.random() * 12 + 6}s`, // Random animation duration between 6 and 18 seconds
      };
      newBubbles.push({ id: i, style });
    }

    setBubbles(newBubbles);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div>
      <div className="bubbles">
        {bubbles.map(bubble => (
          <div key={bubble.id} className="bubble" style={bubble.style}></div>
        ))}
      </div>
    <div className="login-page">
      
      <div>
        <Typography component="h1" variant="h4" gutterBottom sx={{
          color: '#ffffff', // White color
          alignSelf: 'flex-end',
        }} >
          Bluetown Attendance Tracking Portal
        </Typography>
        <Container component="main" maxWidth="xs" className="login-container">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#ffff',
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <img src="/bluetown-logo.svg" alt="Bluetown India" className="logo" />
            <Typography component="h1" variant="h5">
              Please Login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
    </div>
  );
};

export default Login;
