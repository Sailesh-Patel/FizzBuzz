import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './Navbar.css';

import Calculator from '../Pages/Calculator';
import About from '../Pages/About';
import Approach from '../Pages/Approach';
import Home from '../Pages/Home';



function Navbar() {


        let path = window.location.pathname
    if (window.location.pathname === '/') {
        console.log("Home Page");
    }
    else if (window.location.pathname === '/Calculator') {
        console.log("Calc Page");
    }
    else if (window.location.pathname === '/About') {
        console.log("About Page");
    }
    else if (window.location.pathname === '/Approach') {
        console.log("Approach Page");
    }
    else  {
        console.log("Unknown Page");
    }

// className="active"
// ? "active" : ""

    return (

        <div>

            <Router>
                <nav className="nav">
                    <Link to='/' className="site-title">Fizz Buzz</Link>

                    <ul>
                        <li>
                            <Link to='Calculator'>Calculator</Link>
                        </li>

                        <li>
                            <Link to='About'>About</Link>
                        </li>

                        <li>
                            <Link to='Approach'>Approach</Link>
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
