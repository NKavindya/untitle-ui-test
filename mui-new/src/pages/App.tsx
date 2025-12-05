import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppShell from '@layout/AppShell';
import DashboardPage from './DashboardPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}



