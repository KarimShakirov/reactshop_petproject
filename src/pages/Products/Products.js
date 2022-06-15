import React, { useState, useEffect } from 'react';
import Product from "./Product";
import  './Products.css'
import { connect } from "react-redux";

const Products = ({theme}) => {
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

    const currentStyle = theme === 'dark' ? "good-list__dark" : 'goods-list__light'

    return (
        <div className={currentStyle}>
            <h2>List of goods</h2>
            {caps.map(cap => <Product cap={cap} key={cap.id}/>)}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {theme: state.theme.currentTheme}
}


export default connect(mapStateToProps, null) (Products);