import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";


const ProductDetails = () => {
    const [cap, setCap] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()


    const getCap = () => {
        axios.get(`http://159.89.2.247:8003/api/caps/${id}/`)
            .then(response => {
                // console.log(response.data)
                setCap(response.data)
                setLoading(false)
            })
    }

    useEffect(getCap, [])

    if (loading) {
        return <div>...Загрузка</div>
    } else {
        return (
            <div>
                <div>{cap.name}</div>
                <div>{cap.price}</div>
                <div>{cap.description}</div>
                <div><img src={cap.capsimage[0].photo} alt=""/></div>
            </div>
        );
    }
};

export default ProductDetails;