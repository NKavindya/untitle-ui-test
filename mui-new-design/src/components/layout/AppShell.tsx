import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';

const DRAWER_WIDTH = 280;

export default function AppShell() {
  const [themeMode, setThemeMode] = React.useState<'light' | 'dark'>('light');

  const handleThemeToggle = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleSettings = () => {
    // Handle settings click
    console.log('Settings clicked');
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#F5F5F5' }}>
      <Sidebar open={true} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          bgcolor: '#F5F5F5',
        }}
      >
        <Header
          onThemeToggle={handleThemeToggle}
          onFullscreen={handleFullscreen}
          onSettings={handleSettings}
        />
        <Box
          sx={{
            flexGrow: 1,
            p: 0,
            bgcolor: '#F5F5F5',
            minHeight: 'calc(100vh - 64px)',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}



