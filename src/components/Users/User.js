import React from 'react';
import {Link} from "react-router-dom";

const User = ({name}) => {
    return (
        <div>
            <h3><Link to={`/users/${name.id}`}>{name.username} {name.email}</Link></h3>
        </div>
    );
};

export default User;