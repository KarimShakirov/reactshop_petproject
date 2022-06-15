import './App.css';
import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import {useState} from "react";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/Products/ProductDetails";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/Users/UserDetails";
import Signup from "./pages/Users/Signup";
import Login from "./pages/Users/Login";
import Orders from "./pages/Orders/Orders";
import LiveSearch from "./components/LiveSearch/LiveSearch";
import {createStore} from "redux";
import themeReducer from "./shopredux/reducer";
import AppRouter from "./pages/AppRouter";
import {connect} from "react-redux";
import {changeCurrentTheme} from "./shopredux/actions";
import {Provider} from "react-redux";

let store = createStore(themeReducer)

store.subscribe(() => console.log(store.getState()))


function App({ currentTheme, changeCurrentTheme }) {
    const [phone, setPhone] = useState('+996(997-997-908)')
    const [token, setToken] = useState('')
    const [theme, setTheme] = useState("light")


    const changeTheme = () => {
        // const oldTheme = store.getState().value
        // const newTheme = theme === 'light' ? 'dark' : 'light'

        changeCurrentTheme(currentTheme)
    }

    return (
        <Router>
            <div className={currentTheme}>
                <header>

                    <nav>
                        <Link to="/">Home</Link> &nbsp;|&nbsp;&nbsp;
                        <Link to="/about">About us</Link> |&nbsp;&nbsp;
                        <Link to="/contacts">Contacts</Link> |&nbsp;
                        <Link to="/users">Users</Link> |&nbsp;
                        <Link to="/orders">Orders</Link>&nbsp;&nbsp;|&nbsp;
                        <Link to="/search">Search</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/signup">Sign Up</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    </nav>
                    <div>
                        <span>phone: {phone}</span>
                        <div onClick={changeTheme} className="change-theme">Change Theme</div>
                    </div>
                </header>

                <section className="content">
                    <AppRouter phone={phone} theme={theme} token={token} setToken={setToken}/>
                </section>
            </div>
        </Router>
    );
}


//mapStateToProps
const readState = (state) => {
    return {currentTheme: state.theme.currentTheme}
}

//mapDispatchToProps
const themeDispatcher = {
    changeCurrentTheme
}

export default connect(readState, themeDispatcher) (App);
