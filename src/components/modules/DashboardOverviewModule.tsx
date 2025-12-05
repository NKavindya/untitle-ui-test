import React from 'react';
import { Box, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import StatCard from '@ui/StatCard';
import SectionCard from '@layout/SectionCard';
import StatusChip from '@ui/StatusChip';

const recentRequests = [
  { id: 'REQ-1024', applicant: 'Alice Johnson', status: 'success', createdAt: '2025-12-01' },
  { id: 'REQ-1025', applicant: 'Bob Smith', status: 'warning', createdAt: '2025-11-30' },
  { id: 'REQ-1026', applicant: 'Charlie Gray', status: 'error', createdAt: '2025-11-29' }
] as const;

export default function DashboardOverviewModule() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard label="Open requests" value="42" helperText="+5 vs last week" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard label="Approved today" value="12" helperText="Across all workflows" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard label="Pending review" value="18" helperText="Assigned to you" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard label="Average SLA" value="2.3d" helperText="Last 30 days" />
        </Grid>
      </Grid>

      <SectionCard title="Recent requests">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Applicant</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentRequests.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>
                  <Typography variant="body2" fontWeight={500}>
                    {row.id}
                  </Typography>
                </TableCell>
                <TableCell>{row.applicant}</TableCell>
                <TableCell>
                  <StatusChip
                    status={row.status}
                    label={
                      row.status === 'success'
                        ? 'Approved'
                        : row.status === 'warning'
                        ? 'Pending'
                        : 'Rejected'
                    }
                  />
                </TableCell>
                <TableCell>{row.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </SectionCard>
    </Box>
  );
}





