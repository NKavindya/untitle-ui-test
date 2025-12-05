import React from 'react';
import PageContainer from '@layout/PageContainer';
import PageHeader from '@layout/PageHeader';
import DashboardOverviewModule from '@modules/DashboardOverviewModule';

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





