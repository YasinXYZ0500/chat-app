import React from 'react';
import { useEffect } from 'react';
import axios from "axios"

const AQQ = () => {
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => console.log(response))
    })
    return (
        <div>
            
        </div>
    );
};

export default AQQ;