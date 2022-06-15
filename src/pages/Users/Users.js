import React, { useState, useEffect } from 'react';
import User from "./User";

const Users = () => {
    const [names, setNames] = useState([])

    const getNames = () => {
        fetch("http://159.89.2.247:8003/api/users/"
        ).then(response => response.json()
        ).then(data => {
            setNames(data.results)
        })
    }

    useEffect(getNames, [])


    return (
        <div>
            <h2>Users List</h2>
            {names.map(name => <User name={name} key={name.id}/>)}
        </div>
    );
};

export default Users;