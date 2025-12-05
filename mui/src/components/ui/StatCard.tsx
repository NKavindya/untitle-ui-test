import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SectionCard from '../layout/SectionCard';

interface StatCardProps {
  label: string;
  value: string;
  helperText?: string;
}

export default function StatCard({ label, value, helperText }: StatCardProps) {
  return (
    <SectionCard>
      <Stack spacing={0.5}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="h4">{value}</Typography>
        {helperText && (
          <Box>
            <Typography variant="caption" color="text.secondary">
              {helperText}
            </Typography>
          </Box>
        )}
      </Stack>
    </SectionCard>
  );
}



