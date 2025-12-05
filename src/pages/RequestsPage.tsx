import React from 'react';
import PageContainer from '@layout/PageContainer';
import PageHeader from '@layout/PageHeader';
import RequestsListModule from '@modules/RequestsListModule';

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





