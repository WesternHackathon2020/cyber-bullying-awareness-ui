
import React from 'react';
import SideBar from "../components/SideBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/NavBar";
import Dashboard from "../components/Dashboard";
import DashPage from './DashPage';

export default function DashPage({ children }) {
  return (
    <DashPage>
      <Dashboard />
    </DashPage>
  );
}