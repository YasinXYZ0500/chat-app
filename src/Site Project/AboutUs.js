import React from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";

// تعیین محل قرارگیری روت در صفحه با اوت لت
// اوت لت میشه همون نوشته
const AboutUs = () => {
    const navigate = useNavigate();
    const clickBack = () => {
        navigate(-2)
    }
        return (
            <div>
                <h1>About us</h1>
                <Outlet/>
                <ul>
                    <li><Link to="Programmers">Programmer</Link></li>
                    <li><Link to="Drivers">Drivers</Link></li>
                    <button onClick={clickBack}>Back</button>
                </ul>
            </div>
        );
}

export default AboutUs;