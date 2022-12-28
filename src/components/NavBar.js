import React from "react";
import "../styles/NavBar.css";
import {
	ShoppingFilled,
	PieChartFilled,
	SettingFilled,
	UserOutlined,
} from "@ant-design/icons";

function NavBar() {
	return (
		<div className="navbar-main">
			<div className="navbar-icons-container">
				<PieChartFilled className="navbar-icon" />
				<ShoppingFilled className="navbar-icon" />
				<SettingFilled className="navbar-icon" />
				<UserOutlined className="navbar-icon" />
			</div>
		</div>
	);
}

export default NavBar;
