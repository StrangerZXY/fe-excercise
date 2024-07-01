import React from "react";
import './Backstory.css';

const Backstory = () => {
	return (
		<section className="backstory">
			<div className="backStoryText">
				<div className="backStoryTitle">Little Lemon</div>
				<div className="backStoryCity">Chicago</div>
				<article className="backStoryNarrative">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
					Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
					Velit officia consequat duis enim velit mollit.</article>
			</div>
			<div className="backStoryPhotoContainer">
				<div className="photoOne"><img src={require("../images/Male Photo 01.jpg")} alt="First" /></div>
				<div className="photoTwo"><img src={require("../images/Female Photo 01.jpg")} alt="Second" /></div>
			</div>
		</section>
	);
};

export default Backstory;