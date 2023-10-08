import React, { Component } from 'react';
import Banner from './Banner.js';
import Cards from './Cards.js';
import Search from './Search.js';
import Logos from './Logos.js';

class Landing extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Cards/>
                <Search/>
                <Logos/>
            </div>
        );
    }
}

export default Landing;