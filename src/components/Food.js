import React from "react";
import { Card } from "antd";
import pizza from "../images/pizza.png";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import "../styles/Food.css";

const { Meta } = Card;

function Food({ title, description, price }) {
	return (
		<Card
			bordered={false}
			style={{
				width: 200,
			}}
			cover={<img alt="food-img" src={pizza} />}
			// actions={[
			// 	<p>10$</p>,
			// 	<div>
			// 		<EditFilled style={{ color: "blue" }} />
			// 		<DeleteFilled style={{ color: "red" }} />
			// 	</div>,
			// ]}
		>
			<Meta title={title} description={description} className="card-meta" />
			<span className="card-footer">
				<div className="card-footer-price">{price}$</div>
				<div className="card-footer-actions">
					<EditFilled style={{ color: "blue", cursor: "pointer" }} />
					<DeleteFilled style={{ color: "red", cursor: "pointer" }} />
				</div>
			</span>
		</Card>
	);
}

export default Food;
