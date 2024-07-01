import React from "react";
import './Footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footerPicture">
				<img src={require("../images/Logo Rectangle.png")} alt="Footer" />
			</div>
			<div className="footerBox"><h3 className="footerBoxTitle">Doormat<br />Navigation</h3>
				<p className="footerBoxList">Home<br />About<br />Menu<br />Reservations<br />Order Online<br />Login</p>
			</div>
			<div className="footerBox"><h3 className="footerBoxTitle">Contact</h3>
				<p className="footerBoxList">Address<br />Phone number<br />Email</p>
			</div>
			<div className="footerBox"><h3 className="footerBoxTitle">Social Media Links</h3>
				<p className="footerBoxList">Address<br />Phone number<br />Email</p>
			</div>
		</footer>
	);
};

export default Footer;