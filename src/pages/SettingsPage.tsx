import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from '@layout/PageContainer';
import PageHeader from '@layout/PageHeader';
import SectionCard from '@layout/SectionCard';

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





