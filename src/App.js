import React from 'react';
import { Switch, Route } from "react-router-dom"

// components 
import Login from './Messenger project/Login';
import Chats from "./Messenger project/Chats"

import AuthContextProvider from './Messenger project/Context/AuthContextProvider';

import "./App.module.css"

const App = () => {
       
    return (
        <div className="App">
            <AuthContextProvider>
                <Switch>
                    <Route path="/chats" component={Chats}/>
                    <Route path="/" component={Login}/>
                </Switch>
            </AuthContextProvider>
        </div>
    );
};

export default App;