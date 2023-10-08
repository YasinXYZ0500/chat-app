import React, { Component } from 'react';
import { Route, Routes, Navigate} from "react-router-dom"
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Landing from './Landing.js';
import Products from './Products.js';
import DetailsPage from './DetailsPage.js';
import AboutUs from './AboutUs.js';
import NotFound from './NotFound.js';
import Programmers from './Programmers.js';
import Drivers from './Drivers.js';


class webSite extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/Products" element={<Products/>}/>
                    <Route path="/Products/:id" element={<DetailsPage/>}/>
                    <Route path="/AboutUs/*" element={<AboutUs/>}>
                        <Route path="Programmers" element={<Programmers/>}/>
                        <Route path="Drivers" element={<Drivers/>}/>
                    </Route>
                    <Route path="/NotFound/*" element={<NotFound/>}/>
                    <Route path="/*" element={<Navigate to="/NotFound"/>}/>
                    <Route path="/Yasin" element={<Navigate to="/Yasin"/>}/>
                </Routes>
                <Footer/>
            </div>
        );
    }
}

export default webSite;




