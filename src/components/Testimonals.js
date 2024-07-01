import React from "react";
import './Testimonals.css';

const Testimonals = () => {
	return (
		<section className="testimonals">
			<div className="testimonalsTitle">Testimonals</div>
			<div className="testimonalsContainer">

				<div className="testimonalsBox">
					<div class="rating">
						<span class="fa fa-star checked">*</span>
						<span class="fa fa-star checked">*</span>
						<span class="fa fa-star checked">*</span>
						<span class="fa fa-star checked">*</span>
						<span class="fa fa-star checked">*</span>
					</div>
					<div class="customerPhoto">
						<img src={require("../images/male-photo1.jpg")} alt="Customer Male" />
						<p class="customerName">Lee Roy</p>
					</div>
					<p class="testimonialText">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
						voluptas cupiditate aspernatur odit doloribus non.
					</p>
				</div>
				<div className="testimonalsBox">
					<div class="rating">
						<span class="fa fa-star checked">*</span>
						<span class="fa fa-star checked">*</span>
						<span class="fa fa-star checked">*</span>
						<span class="fa fa-star unChecked">*</span>
						<span class="fa fa-star unChecked">*</span>
					</div>
					<div class="customerPhoto">
						<img src={require("../images/female-photo1.jpg")} alt="Customer Female" />
						<p class="customerName">Anna Bella</p>
					</div>
					<p class="testimonialText">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
						voluptas cupiditate aspernatur odit doloribus non.
					</p>
				</div>
				<div className="testimonalsBox">
					<div class="rating">
						<span class="fa fa-star checked">*</span>
						<span class="fa fa-star checked">*</span>
						<span class="fa fa-star checked">*</span>
						<span class="fa fa-star checked">*</span>
						<span class="fa fa-star unChecked">*</span>
					</div>
					<div class="customerPhoto">
						<img src={require("../images/male-photo3.jpg")} alt="Customer Male" />
						<p class="customerName">John Do</p>
					</div>
					<p class="testimonialText">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
						voluptas cupiditate aspernatur odit doloribus non.
					</p>
				</div>

			</div>
		</section>
	);
};

export default Testimonals;