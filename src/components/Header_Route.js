import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './Header.css';
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";

const Header = () => {
	return (
		<header className="header">
			<img src={require("../images/Logo Small.png")} alt="Logo" />
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/menu">Menu</Link></li>
					<li><Link to="/reservations">Reservations</Link></li>
					<li><Link to="/orderOnline">Order Online</Link></li>
					<li><Link to="/login">Login</Link></li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/reservations" element={<Reservations />} />
				<Route path="/orderOnline" element={<OrderOnline />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</header>
	);
};

export default Header;