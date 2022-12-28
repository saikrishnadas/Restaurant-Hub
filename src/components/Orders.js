import React from "react";
import "../styles/Orders.css";
import { Tabs } from "antd";
import OpenOrders from "./OpenOrders";

function Orders() {
	const onChange = (key) => {
		console.log(key);
	};
	return (
		<div className="orders-main">
			<p>Orders</p>
			<Tabs
				defaultActiveKey="1"
				onChange={onChange}
				items={[
					{
						label: <span className="tabs">Open Orders</span>,
						key: "1",
						children: (
							<span>
								<OpenOrders />
							</span>
						),
					},
					{
						label: <span className="tabs">Past Orders</span>,
						key: "2",
						children: `Content of Tab Pane 2`,
					},
					{
						label: <span className="tabs">Completed Orders</span>,
						key: "3",
						children: `Content of Tab Pane 3`,
					},
				]}
			/>
		</div>
	);
}

export default Orders;
