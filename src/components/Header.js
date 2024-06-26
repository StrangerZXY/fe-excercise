import React from "react";
import './Header.css';

const Header = () => {
	return (
		<header className="header">

			<img src={require("../images/Logo Small.png")} alt="Logo" />

			<nav>
				<ul>
					<li><a href="/#">Home</a></li>
					<li><a href="/#">About</a></li>
					<li><a href="/#">Menu</a></li>
					<li><a href="/#">Reservations</a></li>
					<li><a href="/#">Order Online</a></li>
					<li><a href="/#">Login</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;