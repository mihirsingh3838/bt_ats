import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        backgroundColor: '#f2f2f2',
        padding: '10px 0',
        width: '100%',
        borderTop: '1px solid #dcdcdc',
        position: 'fixed',
        bottom: 0,
        left: 0, // Ensure the footer stretches to the left edge
        zIndex: 1000 // Ensure it stays on top of other content
      }}
    >
      <Typography variant="body2">
        &copy; 2024 BSNL User Management Portal | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
