import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const UserDetails = () => {
    const [name, setName] = useState({})
    const {id} = useParams()


    const getName = () => {
        fetch(`http://159.89.2.247:8003/api/users/${id}/`)
            .then(response => response.json())
            .then(data => setName(data))
    }

    useEffect(getName, [])


    return (
        <div>
            <div>{name.id}</div>
            <div>{name.username}</div>
            <div>{name.email}</div>
        </div>
    );
};

export default UserDetails;