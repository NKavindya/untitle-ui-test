import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

interface SectionCardProps {
  title?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export default function SectionCard({ title, actions, children }: SectionCardProps) {
  return (
    <Paper elevation={1} sx={{ p: 2.5 }}>
      {(title || actions) && (
        <Box
          sx={{
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {title && (
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
          )}
          {actions && <Box>{actions}</Box>}
        </Box>
      )}
      {children}
    </Paper>
  );
}





