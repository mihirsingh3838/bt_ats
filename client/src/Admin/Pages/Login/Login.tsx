import React, { useState, useEffect, CSSProperties, FormEvent } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

interface Bubble {
  id: number;
  style: CSSProperties;
}

const Login: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    generateBubbles();
  }, []);

  const getRandomPosition = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  const generateBubbles = (): void => {
    const numBubbles = 25; // Number of bubbles
    const newBubbles: Bubble[] = [];

    for (let i = 0; i < numBubbles; i++) {
      const size = Math.floor(Math.random() * 80) + 20; // Random size between 20 and 100 pixels
      const style: CSSProperties = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${getRandomPosition(0, 90)}%`, // Random left position ensuring it stays within 90% to avoid overflow
        animationDuration: `${Math.random() * 12 + 6}s`, // Random animation duration between 6 and 18 seconds
      };
      newBubbles.push({ id: i, style });
    }

    setBubbles(newBubbles);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-r from-blue-700 to-blue-500">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            className="absolute bottom-0 rounded-full bg-white opacity-30 animate-rise"
            style={bubble.style}
          ></div>
        ))}
      </div>
      <div className="relative flex justify-center items-center h-full w-full">
        <div className="text-white">
          <Typography component="h1" variant="h4" gutterBottom>
            Bluetown Attendance Tracking Portal
          </Typography>
          <Container component="main" maxWidth="xs">
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
              <img src="./logo.svg" alt="Bluetown India" className="w-24 h-24" />
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
