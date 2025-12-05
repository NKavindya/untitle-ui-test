import React from 'react';
import { Box } from '@mui/material';

export default function DashboardPage() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'background.default',
        minHeight: 'calc(100vh - 64px - 48px)'
      }}
    >
      {/* Dashboard content will be added here */}
    </Box>
  );
}
