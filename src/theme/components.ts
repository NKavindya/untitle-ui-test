import { Components } from '@mui/material/styles/components';

const components: Components = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: 'contained',
      color: 'primary'
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
        paddingInline: theme.spacing(2.5),
        paddingBlock: theme.spacing(1),
        fontWeight: 600
      }),
      sizeSmall: ({ theme }) => ({
        paddingInline: theme.spacing(1.75),
        paddingBlock: theme.spacing(0.5)
      })
    }
  },
  MuiCard: {
    defaultProps: {
      elevation: 1
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius * 1.5,
        padding: theme.spacing(2)
      })
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius * 1.5
      })
    }
  },
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
      color: 'inherit'
    }
  },
  MuiToolbar: {
    styleOverrides: {
      root: ({ theme }) => ({
        minHeight: 64,
        [theme.breakpoints.down('sm')]: {
          minHeight: 56
        }
      })
    }
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRight: `1px solid ${theme.palette.divider}`
      })
    }
  },
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiTableCell-root': {
          fontWeight: 600,
          backgroundColor: theme.palette.background.default
        }
      })
    }
  },
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius
      })
    }
  }
};

export default components;





