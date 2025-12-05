import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  Typography
} from '@mui/material';
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Language as LanguageIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

export default function Header() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end', gap: 1 }}>
        <IconButton
          onClick={() => setDarkMode(!darkMode)}
          sx={{ color: 'text.primary' }}
        >
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        <IconButton sx={{ color: 'text.primary' }}>
          <LanguageIcon />
        </IconButton>

        <IconButton sx={{ color: 'text.primary' }}>
          <SettingsIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: 1 }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: 'primary.main',
              fontSize: '0.875rem'
            }}
          >
            U
          </Avatar>
          <Typography variant="body2" sx={{ color: 'text.primary' }}>
            username
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}



