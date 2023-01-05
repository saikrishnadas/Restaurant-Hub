import React, { useState, useEffect } from "react";
import "../styles/Foods.css";
import { EditFilled, PlusCircleFilled } from "@ant-design/icons";
import Food from "./Food";
import { getDocs, collection, doc, updateDoc } from "@firebase/firestore";
import { db } from "../common/firebase-config";
import { useSelector } from "react-redux";
import AddFood from "./AddFood";

function Foods() {
	const [inputVisible, setInputVisible] = useState(false);
	const [name, setName] = useState(false);
	const menu = useSelector((state) => state.menuList.menuList);
	const [isAddModal, setIsAddModal] = useState(false);
	const selectedCategory = useSelector(
		(state) => state.category.selectedCategory
	);

	const handleCategoryUpdate = async () => {
		const categoryDoc = doc(db, "category", selectedCategory.id);
		const newData = { name: name };
		await updateDoc(categoryDoc, newData);
	};

	const showModal = () => {
		setIsAddModal(true);
	};
	const handleOk = () => {
		setIsAddModal(false);
	};
	const handleCancel = () => {
		setIsAddModal(false);
	};

	return (
		<div className="foods-main">
			{inputVisible ? (
				<div>
					<input type="text" onChange={(e) => setName(e.target.value)} />
					<span>
						<button onClick={handleCategoryUpdate}>Ok</button>
						<button onClick={() => setInputVisible(false)}>Cancel</button>
					</span>
				</div>
			) : (
				<div>
					{selectedCategory?.name}{" "}
					<EditFilled
						style={{ color: "blue" }}
						onClick={() => setInputVisible(true)}
					/>
					<PlusCircleFilled
						style={{ color: "red", cursor: "pointer", marginLeft: "10px" }}
						onClick={showModal}
					/>
				</div>
			)}

			<div className="card-main">
				{menu &&
					menu.map((item) => (
						<Food
							id={item.id}
							title={item.title}
							description={item.description}
							price={item.price}
						/>
					))}
			</div>
			<AddFood
				isAddModal={isAddModal}
				handleOk={handleOk}
				handleCancel={handleCancel}
			/>
		</div>
	);
}

export default Foods;
