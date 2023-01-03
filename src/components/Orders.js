import React, { useEffect, useState } from "react";
import "../styles/Orders.css";
import { Tabs } from "antd";
import OpenOrders from "./OpenOrders";
import CompletedOrders from "./CompletedOrders";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../common/firebase-config";

function Orders() {
	const [openOrders, setOpenOrders] = useState([]);
	const [completedOrders, setCompletedOrders] = useState([]);

	const ordersCollectionRef = collection(db, "orders");

	const onChange = (key) => {
		console.log(key);
	};

	useEffect(() => {
		const getOrders = async () => {
			const data = await getDocs(ordersCollectionRef);
			const orders = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
			const openOrders = orders.filter((order) => order.status === "open");
			const completedOrders = orders.filter(
				(order) => order.status === "completed"
			);
			setOpenOrders(openOrders);
			setCompletedOrders(completedOrders);
		};
		getOrders();
	}, []);

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
								<OpenOrders orders={openOrders} />
							</span>
						),
					},
					{
						label: <span className="tabs">Completed Orders</span>,
						key: "3",
						children: (
							<span>
								<CompletedOrders orders={completedOrders} />
							</span>
						),
					},
				]}
			/>
		</div>
	);
}

export default Orders;
