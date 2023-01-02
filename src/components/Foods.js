import React, { useState, useEffect } from "react";
import "../styles/Foods.css";
import { EditFilled } from "@ant-design/icons";
import Food from "./Food";
import { getDocs, collection, doc, updateDoc } from "@firebase/firestore";
import { db } from "../common/firebase-config";
import { useSelector } from "react-redux";

function Foods() {
	const [inputVisible, setInputVisible] = useState(false);
	const [name, setName] = useState(false);
	const menu = useSelector((state) => state.menuList.menuList);
	const selectedCategory = useSelector(
		(state) => state.category.selectedCategory
	);
	// const categoryCollectionRef = collection(db, "category");

	// useEffect(() => {
	// 	const getMenuItems = async () => {
	// 		const data = await getDocs(menuCollectionRef);
	// 		const menuItems = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	// 		setMenu(menuItems);
	// 	};
	// 	getMenuItems();
	// }, []);
	const handleCategoryUpdate = async () => {
		const categoryDoc = doc(db, "category", selectedCategory.id);
		const newData = { name: name };
		await updateDoc(categoryDoc, newData);
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
				</div>
			)}

			<div className="card-main">
				{menu &&
					menu.map((item) => (
						<Food
							title={item.title}
							description={item.description}
							price={item.price}
						/>
					))}
			</div>
		</div>
	);
}

export default Foods;
