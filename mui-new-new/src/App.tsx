import {
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Stack,
  Typography,
} from '@mui/material'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import CropSquareIcon from '@mui/icons-material/CropSquare'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import { useState } from 'react'
import remsLogo from './assets/rts-l.png'

import './App.css'

type NavItem = {
  label: string
  active?: boolean
  children?: { label: string; active?: boolean }[]
}

const navGroups: NavItem[] = [
  {
    label: 'List item',
    children: [
      { label: 'List item', active: true },
      { label: 'List item' },
      { label: 'List item' },
    ],
  },
  { label: 'List item' },
  { label: 'List item' },
  { label: 'List item' },
]

function App() {
  const [openGroupIndex, setOpenGroupIndex] = useState(0)

  const handleToggleGroup = (index: number) => {
    setOpenGroupIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: (theme) => theme.palette.background.default,
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        px: 6,
        py: 4,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 980,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: '0 10px 40px rgba(15, 23, 42, 0.15)',
          overflow: 'hidden',
          display: 'flex',
        }}
      >
        {/* Left sidebar */}
        <Box
          sx={{
            width: 256,
            bgcolor: '#f9fafb',
            borderRight: (theme) => `1px solid ${theme.palette.divider}`,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2.25, py: 2 }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Box component="img" src={remsLogo} alt="REMS logo" sx={{ height: 26 }} />
            </Stack>

            <IconButton size="small" aria-label="settings">
              <SettingsOutlinedIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Divider />

          <Box sx={{ flex: 1, overflow: 'hidden', pt: 1 }}>
            <List dense disablePadding>
              {navGroups.map((group, index) => {
                const hasChildren = !!group.children?.length
                const isOpen = openGroupIndex === index
                const isGroupActive =
                  group.active || group.children?.some((c) => c.active)

                return (
                  <Box key={group.label}>
                    <ListItemButton
                      onClick={hasChildren ? () => handleToggleGroup(index) : undefined}
                      selected={isGroupActive && !hasChildren}
                      sx={{
                        px: 2.25,
                        py: 0.75,
                        borderRadius: 0,
                        '&.Mui-selected': {
                          bgcolor: '#e5edff',
                          '&:hover': {
                            bgcolor: '#d6e2ff',
                          },
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 28, color: 'text.secondary' }}>
                        {isGroupActive ? (
                          <StarRoundedIcon sx={{ fontSize: 16 }} />
                        ) : (
                          <StarBorderRoundedIcon sx={{ fontSize: 16 }} />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: isGroupActive ? 600 : 400,
                              fontSize: 13,
                            }}
                          >
                            {group.label}
                          </Typography>
                        }
                      />
                      {hasChildren ? (
                        isOpen ? (
                          <ExpandLessIcon sx={{ fontSize: 16 }} />
                        ) : (
                          <ExpandMoreIcon sx={{ fontSize: 16 }} />
                        )
                      ) : (
                        <MoreHorizIcon sx={{ fontSize: 16 }} />
                      )}
                    </ListItemButton>

                    {hasChildren && (
                      <Collapse in={isOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding dense>
                          {group.children!.map((child) => (
                            <ListItemButton
                              key={child.label}
                              selected={child.active}
                              sx={{
                                pl: 4.5,
                                pr: 2,
                                py: 0.55,
                                '&.Mui-selected': {
                                  bgcolor: '#e5edff',
                                  '&:hover': {
                                    bgcolor: '#d6e2ff',
                                  },
                                },
                              }}
                            >
                              <ListItemIcon
                                sx={{ minWidth: 28, color: 'text.secondary' }}
                              >
                                {child.active ? (
                                  <StarRoundedIcon sx={{ fontSize: 14 }} />
                                ) : (
                                  <StarBorderRoundedIcon sx={{ fontSize: 14 }} />
                                )}
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      fontWeight: child.active ? 600 : 400,
                                      fontSize: 13,
                                    }}
                                  >
                                    {child.label}
                                  </Typography>
                                }
                              />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </Box>
                )
              })}
            </List>
          </Box>
        </Box>

        {/* Main content */}
        <Box
          sx={{
            flex: 1,
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              px: 4,
              pt: 2.5,
              pb: 3,
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
              <Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5, letterSpacing: 0.2 }}
                >
                  * / / * Link
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Manage Users
                </Typography>
              </Box>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ color: 'text.secondary', mt: 0.5 }}
              >
                <LocationOnOutlinedIcon sx={{ fontSize: 16 }} />
                <CropSquareIcon sx={{ fontSize: 14 }} />
                <CropSquareIcon sx={{ fontSize: 14 }} />
                <CropSquareIcon sx={{ fontSize: 14 }} />
                <FiberManualRecordIcon sx={{ fontSize: 10 }} />
                <Typography variant="caption">München</Typography>
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              flex: 1,
              bgcolor: '#f9fafb',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default App
