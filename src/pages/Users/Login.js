import React, {useState} from 'react';
import axios from "axios";

const Login = ({setToken}) => {
    const [login, setLogin] = useState({})

    const inputLoginHandler = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }

   const sendLoginForm = (event) => {
        event.preventDefault();
        axios.post(
            `http://159.89.2.247:8003/api/users/signin/`,
            login
        ).then(response => {
            if (response.status === 200) {
                setToken(response.data.access)
            }
        })
    }

    return (
        <div>
            <form onSubmit={sendLoginForm}>
                <input name="username" type="text" onChange={inputLoginHandler} placeholder="Введите логин"/>
                <input name="password" type="password" onChange={inputLoginHandler} placeholder="Введите пароль"/>
                <button>Войти</button>
            </form>
        </div>
    );
};

export default Login;