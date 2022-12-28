import React from "react";
import "../styles/Menu.css";
import { Tabs } from "antd";
import Category from "./Category";
import Foods from "./Foods";

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
						label: <span className="tabs">Category</span>,
						key: "1",
						children: (
							<span style={{ display: "flex" }}>
								<Category />
								<Foods />
							</span>
						),
					},
					{
						label: <span className="tabs">Modifiers</span>,
						key: "2",
						children: `Content of Tab Pane 2`,
					},
				]}
			/>
		</div>
	);
}

export default Menu;
