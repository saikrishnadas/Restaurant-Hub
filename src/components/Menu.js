import React from "react";
import "../styles/Menu.css";
import { Tabs } from "antd";
import Category from "./Category";

function Menu() {
	const onChange = (key) => {
		console.log(key);
	};
	return (
		<div className="menu-main">
			<p>Menu</p>
			<Tabs
				defaultActiveKey="1"
				onChange={onChange}
				items={[
					{
						label: (
							<span className="tabs" style={{ marginRight: "50px" }}>
								Category
							</span>
						),
						key: "1",
						children: <Category />,
					},
					{
						label: (
							<span className="tabs" style={{ marginLeft: "50px" }}>
								Modifiers
							</span>
						),
						key: "2",
						children: `Content of Tab Pane 2`,
					},
				]}
			/>
		</div>
	);
}

export default Menu;
