import React from 'react';
import {
  Box,
  Grid,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import SectionCard from 'mui/src/components/layout/SectionCard';
import TextInput from 'mui/src/components/ui/TextInput';
import StatusChip from 'mui/src/components/ui/StatusChip';

const rows = [
  { id: 'REQ-1001', applicant: 'Alice Johnson', type: 'Access', status: 'success' },
  { id: 'REQ-1002', applicant: 'Bob Smith', type: 'Onboarding', status: 'warning' },
  { id: 'REQ-1003', applicant: 'Charlie Gray', type: 'Access', status: 'error' },
  { id: 'REQ-1004', applicant: 'Dana Miles', type: 'Offboarding', status: 'success' }
] as const;

export default function RequestsListModule() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <SectionCard title="Filters">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextInput label="Search requests" placeholder="Search by ID or applicant" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextInput label="Type" select defaultValue="all">
              <MenuItem value="all">All types</MenuItem>
              <MenuItem value="access">Access</MenuItem>
              <MenuItem value="onboarding">Onboarding</MenuItem>
              <MenuItem value="offboarding">Offboarding</MenuItem>
            </TextInput>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextInput label="Status" select defaultValue="all">
              <MenuItem value="all">All statuses</MenuItem>
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="approved">Approved</MenuItem>
              <MenuItem value="rejected">Rejected</MenuItem>
            </TextInput>
          </Grid>
        </Grid>
      </SectionCard>

      <SectionCard title="All requests">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Applicant</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.applicant}</TableCell>
                <TableCell>{row.type}</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </SectionCard>
    </Box>
  );
}



