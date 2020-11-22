import React from 'react';
import Dashboard from '../components/Dashboard';
import DashPage from './DashPage';
import TelusContactContainer from "../components/TelusBottomBar/TelusContactContainer";

const Home = () => (
    <DashPage>
        <Dashboard />
        <TelusContactContainer/>
    </DashPage>
);

export default Home;
