import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import search from '../img/search.svg'


const LiveSearch = () => {
    const [info, setInfo] = useState([])
    const [input, setInput] = useState('')


    useEffect(() => {
        axios.get(`http://159.89.2.247:8003/api/caps/?search=${input}`)
            .then(response => {
                setInfo(response.data.results)
            })
    }, [input])

    const [isOpen, setIsOpen] = useState(true)

    const itemClickHandler  = (event) => {
        setInput(event.target.textContent)
        setIsOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }


    return (
        <>
            <h1>Live Search</h1>
            <form className="search-box">
                <a href="" className="search__btn">
                    <img src={search} alt=""/>
                </a>
                <input
                    type="text"
                    placeholder="Поиск"
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    className="search-txt"
                    onClick={inputClickHandler}
                />
                <ul className="autocomplete">
                    {
                        input && isOpen
                            ?
                            info.map((elem, index) => (
                                    <li
                                        key={index}
                                        className="autocomplete__item"
                                        onClick={itemClickHandler}
                                    ><Link to={`products/${elem.id}`}>{elem.name}</Link></li>
                            ))
                            : null
                    }
                </ul>
            </form>
            {info.map((elem, index) => (
                <div key={index}>
                    <p>{elem.name}</p>
                </div>
            ))}
        </>
    );
};

export default LiveSearch;