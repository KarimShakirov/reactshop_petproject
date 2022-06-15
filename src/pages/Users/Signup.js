import React, {useState} from 'react';
import axios from "axios";


const SignUp = () => {
    const [user, setUser] = useState({});
    function inputHandler(event){
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }


    function sendForm(event){
        event.preventDefault();
        axios.post(
            `http://159.89.2.247:8003/api/users/signup/`,
            user
        ).then(response => {
            console.log(response.data)
        })
    }


    return (
        <form onSubmit={sendForm}>
            <input name="username" onChange={inputHandler} type="text" placeholder="Login" autoFocus/>
            <input name="password" onChange={inputHandler} type="password" placeholder="Password"/>
            <input name="password2" onChange={inputHandler} type="password" placeholder="Confirm password"/>
            <input name="email" type="email" onChange={inputHandler} placeholder="Email"/>
            <input name="phone" type="text" onChange={inputHandler} placeholder="Phone Number"/>
            <input name="first_name" type="text" onChange={inputHandler} placeholder="First name"/>
            <input name="last_name" type="text" onChange={inputHandler} placeholder="Last name"/>
            <button>Зарегистрироваться</button>
        </form>
    );
};
export default SignUp;