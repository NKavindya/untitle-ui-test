import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Avatar,
} from '@mui/material';
import {
  DarkMode as DarkModeIcon,
  Fullscreen as FullscreenIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Bolt as BoltIcon,
} from '@mui/icons-material';

interface HeaderProps {
  onThemeToggle?: () => void;
  onFullscreen?: () => void;
  onSettings?: () => void;
}

export default function Header({
  onThemeToggle,
  onFullscreen,
  onSettings,
}: HeaderProps) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: '#FFFFFF',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        color: '#212121',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: 3,
          minHeight: '64px !important',
        }}
      >
        {/* REMS Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '2px solid #212121',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <BoltIcon sx={{ fontSize: 20, color: '#212121' }} />
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                fontSize: '1.25rem',
                color: '#212121',
                fontFamily: 'inherit',
              }}
            >
              REMS
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#757575',
                fontSize: '0.7rem',
                lineHeight: 1.2,
                display: 'block',
              }}
            >
              Renewable Energy Management System
            </Typography>
          </Box>
        </Box>

        {/* Right side icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            size="small"
            onClick={onThemeToggle}
            sx={{
              color: '#212121',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <DarkModeIcon fontSize="small" />
          </IconButton>

          <IconButton
            size="small"
            onClick={onFullscreen}
            sx={{
              color: '#212121',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <FullscreenIcon fontSize="small" />
          </IconButton>

          <IconButton
            size="small"
            onClick={onSettings}
            sx={{
              color: '#212121',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <SettingsIcon fontSize="small" />
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              ml: 1,
              pl: 2,
              borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: 'rgba(0, 0, 0, 0.08)',
                color: '#212121',
              }}
            >
              <PersonIcon fontSize="small" />
            </Avatar>
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.875rem',
                color: '#212121',
                fontWeight: 400,
              }}
            >
              username
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}



