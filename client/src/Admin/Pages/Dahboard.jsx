import React from 'react';
import { Typography, Box } from '@mui/material';
import Header from '../components/Header'; // Adjust the import path as necessary

const Dashboard = () => {
  const isSidebarOpen = false; // Adjust based on your state

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} />
      <Box sx={{ mt: 8, p: 2 }}> {/* Adjust the margin top to match the AppBar height */}
        <Typography variant="h4">Dashboard</Typography>
      </Box>
    </>
  );
};

export default Dashboard;
