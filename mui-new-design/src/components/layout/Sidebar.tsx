import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Bolt as BoltIcon,
  AccessTime as AccessTimeIcon,
  Dns as DnsIcon,
  Factory as FactoryIcon,
  Group as GroupIcon,
  Settings as SettingsIcon,
  Storage as StorageIcon,
  BarChart as BarChartIcon,
  WbSunny as WbSunnyIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';

const DRAWER_WIDTH = 280;

interface SidebarProps {
  open: boolean;
  onClose?: () => void;
}

export default function Sidebar({ open }: SidebarProps) {
  return (
    <Box
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        bgcolor: '#FFFFFF',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {/* Yellow accent line for active item */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 96, // Approximate position after logo
          width: '4px',
          height: '48px', // Height of one list item
          bgcolor: '#FFC107',
          zIndex: 1,
        }}
      />

      {/* Logo Section */}
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 1.5, position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'transparent',
            borderRadius: 1.5,
            position: 'relative',
          }}
        >
          {/* Gear/Lightning icon - simplified as a circle with lightning */}
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

      <List sx={{ px: 2, py: 1, position: 'relative', zIndex: 2 }}>
        {/* Main Dashboard - Active */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton
            selected
            sx={{
              borderRadius: 2,
              bgcolor: 'rgba(255, 193, 7, 0.2)',
              color: '#FF9800',
              '&.Mui-selected': {
                bgcolor: 'rgba(255, 193, 7, 0.2)',
                color: '#FF9800',
                '&:hover': {
                  bgcolor: 'rgba(255, 193, 7, 0.25)',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Main Dashboard"
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: '0.95rem',
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Net Generation */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40, color: '#757575' }}>
              <BoltIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Net Generation"
              primaryTypographyProps={{
                fontSize: '0.95rem',
                color: '#212121',
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Section Header */}
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography
            variant="caption"
            sx={{
              color: '#757575',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            PURE GENERATION
          </Typography>
        </Box>

        {/* Overview */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40, color: '#757575' }}>
              <AccessTimeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Overview"
              primaryTypographyProps={{
                fontSize: '0.95rem',
                color: '#212121',
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Inverters */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40, color: '#757575' }}>
              <DnsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Inverters"
              primaryTypographyProps={{
                fontSize: '0.95rem',
                color: '#212121',
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Plants */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40, color: '#757575' }}>
              <FactoryIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Plants"
              primaryTypographyProps={{
                fontSize: '0.95rem',
                color: '#212121',
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* EPC */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40, color: '#757575' }}>
              <GroupIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="EPC"
              primaryTypographyProps={{
                fontSize: '0.95rem',
                color: '#212121',
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Settings */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40, color: '#757575' }}>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              primaryTypographyProps={{
                fontSize: '0.95rem',
                color: '#212121',
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Data Collection */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40, color: '#757575' }}>
              <StorageIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Data Collection"
              primaryTypographyProps={{
                fontSize: '0.95rem',
                color: '#212121',
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Gen Forecast */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40, color: '#757575' }}>
              <BarChartIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Gen Forecast"
              primaryTypographyProps={{
                fontSize: '0.95rem',
                color: '#212121',
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Solar Control */}
        <ListItem disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ minWidth: 40, color: '#757575' }}>
              <WbSunnyIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Solar Control"
              primaryTypographyProps={{
                fontSize: '0.95rem',
                color: '#212121',
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>

      {/* Bottom section */}
      <Box sx={{ mt: 'auto', pb: 2 }}>
        <List sx={{ px: 2 }}>
          {/* Plant Registration */}
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton sx={{ borderRadius: 2 }}>
              <ListItemIcon sx={{ minWidth: 40, color: '#757575' }}>
                <DescriptionIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Plant Registration"
                primaryTypographyProps={{
                  fontSize: '0.95rem',
                  color: '#212121',
                }}
              />
            </ListItemButton>
          </ListItem>

          {/* User Management */}
          <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius: 2 }}>
              <ListItemIcon sx={{ minWidth: 40, color: '#757575' }}>
                <GroupIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="User Management"
                primaryTypographyProps={{
                  fontSize: '0.95rem',
                  color: '#212121',
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

