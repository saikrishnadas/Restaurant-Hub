import React from "react";
import "../styles/Header.css";
import LOGO from "../images/Resturant-Title.png";

function Header() {
	return (
		<div className="header-main">
			<div className="logo-main">
				<img src={LOGO} alt="logo" className="logo-image" />
			</div>
		</div>
	);
}

export default Header;
