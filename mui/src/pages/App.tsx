import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppShell from 'mui/src/components/layout/AppShell';
import DashboardPage from './DashboardPage';
import RequestsPage from './RequestsPage';
import SettingsPage from './SettingsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<DashboardPage />} />
        <Route path="requests" element={<RequestsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}



