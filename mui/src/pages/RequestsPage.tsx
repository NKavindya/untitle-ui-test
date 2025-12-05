import React from 'react';
import PageContainer from 'mui/src/components/layout/PageContainer';
import PageHeader from 'mui/src/components/layout/PageHeader';
import RequestsListModule from 'mui/src/components/modules/RequestsListModule';

export default function RequestsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Requests"
        subtitle="Browse and manage all approval requests in the system."
      />
      <RequestsListModule />
    </PageContainer>
  );
}



