import React, {useState} from 'react';
import axios from "axios";

const Login = () => {
    const [login, setLogin] = useState({})

    const inputLoginHandler = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }

   const sendLoginForm =(event) => {
        event.preventDefault();
        axios.post(
            `http://159.89.2.247:8003/api/users/signin/`,
            login
        ).then(response => {
            console.log(response.data)
        })
    }

    return (
        <div>
            <form onSubmit={sendLoginForm}>
                <input name="username" type="text" onChange={inputLoginHandler} placeholder="Введите логин"/>
                <input name="password" type="text" onChange={inputLoginHandler} placeholder="Введите пароль"/>
                <button>Войти</button>
            </form>
        </div>
    );
};

export default Login;