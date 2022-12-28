import React from "react";
import "../styles/NavBar.css";
import {
	ShoppingFilled,
	PieChartFilled,
	SettingFilled,
	UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div className="navbar-main">
			<div className="navbar-icons-container">
				<Link to="/">
					<PieChartFilled className="navbar-icon" />
				</Link>
				<Link to="/menu">
					<ShoppingFilled className="navbar-icon" />
				</Link>
				<SettingFilled className="navbar-icon" />
				<UserOutlined className="navbar-icon" />
			</div>
		</div>
	);
}

export default NavBar;
