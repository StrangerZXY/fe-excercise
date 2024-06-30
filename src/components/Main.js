import React from "react";
import './Main.css';

const Main = () => {
	return (
		<main className="main wrapper">
			<div className="mainText">
				<div className="title">Little Lemon</div>
				<div className="city">Chicago</div>
				<div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
				<button className="button">Reserve a Teble</button>
			</div>
			<div className="mainImage">
				<img src={require("../images/Hero Small.jpg")} alt="Hero" />
			</div>
		</main>
	);
};

export default Main;