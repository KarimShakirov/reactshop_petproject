import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const [cap, setCap] = useState({})
    const {id} = useParams()



    const getCap = () => {
        fetch(`http://159.89.2.247:8003/api/caps/${id}/`)
            .then(response => response.json())
            .then(data => setCap(data))
    }

    useEffect(getCap, [])

    return (
        <div>
            <div>{cap.name}</div>
            <div>{cap.price}</div>
            <div>{cap.description}</div>
        </div>
    );
};

export default ProductDetails;