import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
    
    return (
    <BrowserRouter>
        <div className="container">
            <title>Cyber Bulling Detection</title>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route component={Home} />
            </Switch>
        </div>
    </BrowserRouter>
)};

export default App;
