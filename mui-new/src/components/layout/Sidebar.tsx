import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Star as StarIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  SettingsOutlined as SettingsOutlinedIcon
} from '@mui/icons-material';

const DRAWER_WIDTH = 280;

interface SidebarProps {
  open: boolean;
  onClose?: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
          bgcolor: '#FFFFFF'
        }
      }}
    >
      {/* Logo Section */}
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'primary.main',
            borderRadius: 1.5,
            color: 'white'
          }}
        >
          <SettingsOutlinedIcon sx={{ fontSize: 24 }} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2, fontSize: '1.25rem' }}>
            REMS
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem', lineHeight: 1.2 }}>
            Renewable Energy Management System
          </Typography>
        </Box>
      </Box>

      <Divider />

      <List sx={{ px: 2, py: 1 }}>
        {/* Main Dashboard - Active */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton
            selected
            sx={{
              borderRadius: 2,
              bgcolor: 'rgba(255, 193, 7, 0.2)',
              color: 'rgba(255, 152, 0, 1)',
              '&.Mui-selected': {
                bgcolor: 'rgba(255, 193, 7, 0.2)',
                color: 'rgba(255, 152, 0, 1)',
                '&:hover': {
                  bgcolor: 'rgba(255, 193, 7, 0.25)'
                }
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Main Dashboard"
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Primary Group */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <StarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Net Generation"
              primaryTypographyProps={{
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <StarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Gen Forecast"
              primaryTypographyProps={{
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <StarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Solar Control"
              primaryTypographyProps={{
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Section Header */}
        <Box sx={{ px: 3, py: 1.5 }}>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            PURE GENERATION
          </Typography>
        </Box>

        {/* Secondary Group */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <StarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Overview"
              primaryTypographyProps={{
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <StarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Inverters"
              primaryTypographyProps={{
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <StarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Plants"
              primaryTypographyProps={{
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="EPC"
              primaryTypographyProps={{
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              primaryTypographyProps={{
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <StarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Data Collection"
              primaryTypographyProps={{
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <StarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Plant Registration"
              primaryTypographyProps={{
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider sx={{ my: 1 }} />

      <List sx={{ px: 2 }}>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="User Management"
              primaryTypographyProps={{
                fontSize: '0.95rem'
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

