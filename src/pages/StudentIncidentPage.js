import React from 'react';
import Dashboard from '../components/Dashboard';
import DashPage from './DashPage';

export default function StudentIncidentPage({ children }) {
  return (
    <DashPage>
      <Dashboard />
    </DashPage>
  );
}
