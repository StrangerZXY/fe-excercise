import React from "react";
import './Specials.css';

const Specials = () => {
	return (
		<section className="specials">
			<div className="specialsTitleBox">
				<h2 className="specialsTitle">This weeks special!</h2>
				<div><button className="button">Online Menu</button></div>
			</div>
			<div className="dishContainer">
				<div className="dishBox">
					<div className="specialsImage">
						<img src={require("../images/Greek Salad Small.jpg")} alt="GreekSalad" />
					</div>
					<div className="specialsTextBox">
						<div className="dishTitle">Greek salad <span>$ 12.99</span></div>
						<div className="dishDescription">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</div>
						<div className="dishOrderDelivery">Order a delivery<img src={require("../images/ic--baseline-delivery-dining-black.png")} alt="Delivery Icon" /></div>
					</div>
				</div>
				<div className="dishBox">
					<div className="specialsImage">
						<img src={require("../images/Bruschetta Small.jpg")} alt="Bruschetta" />
					</div>
					<div className="specialsTextBox">
						<div className="dishTitle">Bruschetta <span>$ 5.99</span></div>
						<div className="dishDescription">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</div>
						<div className="dishOrderDelivery">Order a delivery<img src={require("../images/ic--baseline-delivery-dining-black.png")} alt="Delivery Icon" /></div>
					</div>
				</div>
				<div className="dishBox">
					<div className="specialsImage">
						<img src={require("../images/Lemon Dessert.jpg")} alt="LemonDessert" />
					</div>
					<div className="specialsTextBox">
						<div className="dishTitle">Lemon Dessert <span>$ 5.00</span></div>
						<div className="dishDescription">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</div>
						<div className="dishOrderDelivery">Order a delivery<img src={require("../images/ic--baseline-delivery-dining-black.png")} alt="Delivery Icon" /></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Specials;