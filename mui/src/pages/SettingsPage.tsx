import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'mui/src/components/layout/PageContainer';
import PageHeader from 'mui/src/components/layout/PageHeader';
import SectionCard from 'mui/src/components/layout/SectionCard';

export default function SettingsPage() {
  return (
    <PageContainer>
      <PageHeader title="Settings" subtitle="Configure REMS preferences and defaults." />
      <SectionCard title="General">
        <Typography variant="body2" color="text.secondary">
          This is a placeholder settings screen. Map individual settings sections from
          the Figma design into dedicated modules here.
        </Typography>
      </SectionCard>
    </PageContainer>
  );
}



