import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
    return (
        <div className="app">
            <Router>
                <Header/>

                <div className="app_body">
                    <Sidebar/>
                    <Switch>
                        <Route path={'/room/:roomid'}>
                            <h1>CHAT SCREEN</h1>
                        </Route>
                        <Route path={'/'}>
                            <h1>Welcome</h1>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
