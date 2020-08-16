import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import {useStateValue} from "./store/StateProvider";

function App() {
    const [state, dispatch] = useStateValue();
    console.log(state);

    return (
        <div className="app">
            <Router>
                {!state.user ? (<Login/>) : (
                    <>
                        <Header/>
                        <div className="app_body">
                            <Sidebar/>
                            <Switch>
                                <Route path={'/room/:roomid'}>
                                    <Chat/>
                                </Route>
                                <Route path={'/'}>
                                    <h1>Welcome</h1>
                                </Route>
                            </Switch>
                        </div>
                    </>
                )}


            </Router>
        </div>
    );
}

export default App;
