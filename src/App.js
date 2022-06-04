import './App.css';
import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import {useState} from "react";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";
import Users from "./components/Users/Users";
import UserDetails from "./components/Users/UserDetails";

function App() {
    const [phone, setPhone] = useState('+996(997-997-908)')

    return (
        <Router>
            <header>
                <nav>
                    <Link to="/">Home</Link> &nbsp;|&nbsp;&nbsp;
                    <Link to="/about">About us</Link> |&nbsp;&nbsp;
                    <Link to="/contacts">Contacts</Link> |&nbsp;
                    <Link to="/users">Users</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                phone: {phone}
                    </span>
                </nav>
            </header>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts phoneNumber={phone}/>}/>
                <Route path="/" element={<Products />}/>
                <Route path="/products/:id" element={<ProductDetails />}/>
                <Route path="/users" element={<Users />}/>
                <Route path="/users/:id" element={<UserDetails />}/>
            </Routes>
        </Router>
    );
}

export default App;
