import React, { useState, useEffect } from 'react';
import axios from "axios";

const Orders = ({token}) => {
    const [ordersCount, setOrders] = useState([])
    const [message, setMessage] = useState('')

    const getOrders = () => {
        axios.get(
            `http://159.89.2.247:8003/api/orders/`,
            {
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
            }
        ).then(response => {
            if (response.data.count === 0) {
                setMessage("Заказов нет...")
            } else {
                setOrders(response.data.count)
            }
        })
            .catch(error => {
                if (error.response.status === 401) {
                    setMessage("Необходимо пройти авторизацию!")
                } else {
                    setMessage(error.message)
                }
            })
    }

    useEffect(getOrders, [])

    if (message) {
        return <div>{message}</div>
    } else {
        return (
            <div>
               Заказов: {ordersCount}
            </div>
        );
    }
};

export default Orders;