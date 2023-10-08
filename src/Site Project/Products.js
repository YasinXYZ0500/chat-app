import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Products extends Component {
    render() {
        return (
            <div>
                <h1>Products</h1>
                <ul>
                    <li><Link to="/Products/1">Product 1</Link></li>
                    <li><Link to="/Products/2">Product 2</Link></li>
                    <li><Link to="/Products/3">Product 3</Link></li>
                    <li><Link to="/Products/4">Product 4</Link></li>
                </ul>
            </div>
        );
    }
}

export default Products;