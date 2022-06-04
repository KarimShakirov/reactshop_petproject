import React from 'react';
import {useState} from "react";

const About = () => {
    const [projectName, setProjectName] = useState('React shop')

    return (
        <div>
            <h2>Добро пожаловать в {projectName}</h2>
        </div>
    );
};

export default About;