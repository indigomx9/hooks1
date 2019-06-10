import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => (
    <nav className="nav">
        <h2>LOGO</h2>
        <ul className="nav__links">
            <NavLink className="nav__link" to="/">Home</NavLink>
            <NavLink className="nav__link" to="/about">About</NavLink>
        </ul>
    </nav>
);

