import React from 'react';
import { Box, Container } from '@mui/material';

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>{children}</Box>
    </Container>
  );
}





