import React, { useState, useEffect } from 'react';
import Product from "./Product";

const Products = () => {
    const [caps, setCaps] = useState([])

    const getCaps = () => {
        fetch(
            "http://159.89.2.247:8003/api/caps/"
        ).then(response => response.json())
            .then(data => {
                setCaps(data.results)
            })
    }

    useEffect(getCaps, [])

    return (
        <div>
            <h2>List of goods</h2>
            {caps.map(cap => <Product cap={cap} key={cap.id}/>)}
        </div>
    )
};

export default Products;