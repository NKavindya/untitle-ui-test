import React from 'react';
import PageContainer from 'mui/src/components/layout/PageContainer';
import PageHeader from 'mui/src/components/layout/PageHeader';
import DashboardOverviewModule from 'mui/src/components/modules/DashboardOverviewModule';

export default function DashboardPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Dashboard"
        subtitle="Overview of current REMS activity and key metrics."
      />
      <DashboardOverviewModule />
    </PageContainer>
  );
}



