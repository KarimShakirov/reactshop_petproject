import React from 'react';
import {useState} from "react";

const Contacts = ({ phoneNumber }) => {
    return (
        <div>
            <h3>{phoneNumber}</h3>
            <h3>email: shakirovcorporation@gmail.com</h3>
        </div>
    )
};

export default Contacts;