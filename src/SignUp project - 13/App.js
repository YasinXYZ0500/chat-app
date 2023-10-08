import React from 'react';
import SignUp from './SignUp project - 13/SignUp';
import LogIn from './SignUp project - 13/LogIn';
import { Route, Routes, Navigate} from "react-router-dom";

const App = () => {
    
    return (
        <div>
            <Routes>
                <Route path="/LogIn" element={<LogIn/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
                <Route path="/" element={<Navigate to="/SignUp"/>}/>
            </Routes>

            
        </div>
    );
};

export default App;