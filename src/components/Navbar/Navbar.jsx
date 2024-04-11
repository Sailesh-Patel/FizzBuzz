import React, { useState } from 'react'
import { Link, NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './Navbar.css';

import Calculator from '../Pages/Calculator';
import About from '../Pages/About';
import Approach from '../Pages/Approach';
import Home from '../Pages/Home';



function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);



    //     let path = window.location.pathname
    // if (window.location.pathname === '/') {
    //     console.log("Home Page");
    // }
    // else if (window.location.pathname === '/Calculator') {
    //     console.log("Calc Page");
    // }
    // else if (window.location.pathname === '/About') {
    //     console.log("About Page");
    // }
    // else if (window.location.pathname === '/Approach') {
    //     console.log("Approach Page");
    // }
    // else  {
    //     console.log("Unknown Page");
    // }

    // className="active"
    // ? "active" : ""

    return (

        <div>

            <Router>
                <nav className="nav">
                    <Link to='/' className="site-title">Fizz Buzz</Link>
                    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={menuOpen ? "open" : ""}>
                        <li>
                            <NavLink to='Calculator'>Calculator</NavLink>
                        </li>

                        <li>
                            <NavLink to='About'>About</NavLink>
                        </li>

                        <li>
                            <NavLink to='Approach'>Approach</NavLink>
                        </li>
                    </ul>

                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Calculator' element={<Calculator />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Approach' element={<Approach />} />
                </Routes>
            </Router>

        </div>
    )
}
export default Navbar
