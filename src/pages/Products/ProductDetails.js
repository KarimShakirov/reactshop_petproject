import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import './Product.css'
import {connect} from "react-redux";


const ProductDetails = ({theme}) => {
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

    const imageStyle = theme === 'dark' ? 'image-with-border' : ''

    if (loading) {
        return <div>...Загрузка</div>
    } else {
        return (
            <div>
                <div>{cap.name}</div>
                <div>{cap.price}</div>
                <div>{cap.description}</div>
                <div><img className={imageStyle} width="30%" src={cap.capsimage.length > 0 ? cap.capsimage[0].photo : ""} alt=""/></div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {theme : state.theme.currentTheme}
}

export default connect(mapStateToProps, null) (ProductDetails);