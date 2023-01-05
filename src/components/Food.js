import React from "react";
import { Card, Modal } from "antd";
import pizza from "../images/pizza.png";
import {
	EditFilled,
	DeleteFilled,
	ExclamationCircleFilled,
} from "@ant-design/icons";
import "../styles/Food.css";
import { doc, deleteDoc } from "@firebase/firestore";
import { db } from "../common/firebase-config";

const { confirm } = Modal;

const { Meta } = Card;

function Food({ id, title, description, price }) {
	const deleteItem = async () => {
		const foodDoc = doc(db, "menu", id);
		await deleteDoc(foodDoc);
	};
	const showPromiseConfirm = () => {
		confirm({
			title: "Do you want to delete this item?",
			icon: <ExclamationCircleFilled />,
			content: "Deleted items can't be restored!",
			onOk() {
				deleteItem();
			},
			onCancel() {},
		});
	};
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
					<DeleteFilled
						style={{ color: "red", cursor: "pointer" }}
						onClick={showPromiseConfirm}
					/>
				</div>
			</span>
		</Card>
	);
}

export default Food;
