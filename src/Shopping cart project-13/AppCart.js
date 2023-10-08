import "./App.module.css"
import React from 'react';

import {Switch, Route, Redirect} from "react-router-dom"
// import {Switch, Route, Routes, Navigate} from "react-router-dom"

// Components
import Store from './Store';
import ProductDetails from "./ProductDetails";
import Navbar from "./Shared/Navbar";
import ShopCart from "./ShopCart";

// context
import ProductContextProvider from "./Context/ProductContextProvider";
import CartContextProvider, {CartContext} from "./Context/CartContextProvider";

// import ClassCom from "./Tamrin/ClassCom";

const App = () => {

    return (
        <ProductContextProvider>
            <CartContextProvider>
                <Navbar/>
                <Switch>
                    {/* ایدی برای اینکه بتونم اونو داخل پارامز بگیرم:*/}
                    <Route path="/products/:id" component={ProductDetails}/>
                    <Route path="/products" component={Store}/>
                    <Route path="/Cart" component={ShopCart}/>
                    <Redirect to="/products"/>    
                    {/* Children */}
                </Switch>
                {/* <ClassCom/> */}
            </CartContextProvider>
        </ProductContextProvider>

        // react-router-dom@6
        
        //     <ProductContextProvider>
        //     <CartContextProvider>
        //         <Navbar/>
        //         <Routes>
        //             <Route path="/products/:id" element={<ProductDetails/>}/>
        //             <Route path="/products" element={<Store/>}/>
        //             <Route path="/Cart" element={<ShopCart/>}/>
        //             <Route path="/*" element={Navigate="/products"/>   
        //             {/* Children */}
        //         </Routes>
        //     </CartContextProvider>
        // </ProductContextProvider>
    );
};

export default App;