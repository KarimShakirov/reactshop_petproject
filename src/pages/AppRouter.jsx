import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Products from "./Products/Products";
import ProductDetails from "./Products/ProductDetails";
import Users from "./Users/Users";
import Orders from "./Orders/Orders";
import LiveSearch from "../components/LiveSearch/LiveSearch";
import UserDetails from "./Users/UserDetails";
import Login from "./Users/Login";
import {changeCurrentTheme} from "../shopredux/actions";

const AppRouter = ({phone, changeCurrentTheme, token, setToken}) => {
    return (
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts phoneNumber={phone}/>}/>
                <Route path="/" element={<Products />}/>
                <Route path="/products/:id" element={<ProductDetails />}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/orders" element={<Orders token={token}/>}/>
                <Route path="/search" element={<LiveSearch/>}/>
                <Route path="/users/:id" element={<UserDetails/>}/>
                <Route path="/login" element={<Login setToken={setToken}/>}/>
            </Routes>
    );
};

export default AppRouter;