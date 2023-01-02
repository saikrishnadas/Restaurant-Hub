import React, { useEffect, useState } from "react";
import "../styles/Category.css";
import { MenuOutlined } from "@ant-design/icons";
import { collection, addDoc, getDocs } from "@firebase/firestore";
import { db } from "../common/firebase-config";
import { useDispatch } from "react-redux";
import { addMenu } from "../features/menu/menuSlice";
import { changeSelectedCategory } from "../features/category/categorySlice";

function Category() {
	const [selected, setSelected] = useState(1);
	const [inputVisble, setInputVisible] = useState(false);
	const [name, setName] = useState("");
	const [categories, setCategories] = useState([]);
	const dispatch = useDispatch();

	const categoryCollectionRef = collection(db, "category");
	const menuCollectionRef = collection(db, "menu");

	//Add new category
	const createCategory = async () => {
		await addDoc(categoryCollectionRef, { name: name });
	};

	useEffect(() => {
		const getCategories = async () => {
			const data = await getDocs(categoryCollectionRef);
			let categories = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
			setCategories(categories);
			dispatch(changeSelectedCategory(categories[0]));
		};
		getCategories();
	}, []);

	const getMenuItems = async (categoryId) => {
		const data = await getDocs(menuCollectionRef);
		const menuItems = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		const filteredMenuItems = menuItems.filter(
			(item) => item.categoryId === categoryId
		);
		dispatch(addMenu(filteredMenuItems));
	};

	return (
		<div className="category-main">
			<span className="category-header">
				<span>Category</span>
				{inputVisble ? (
					<span onClick={() => setInputVisible(true)}>
						<input
							type="text"
							placeholder="Category Name"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
						<span onClick={createCategory}>Ok</span>
						<span onClick={() => setInputVisible(false)}>Cancel</span>
					</span>
				) : (
					<span onClick={() => setInputVisible(true)}>+ Add</span>
				)}
			</span>

			<div className="category-tabs">
				{categories &&
					categories.map((category, index) => (
						<div
							onClick={() => {
								setSelected(index + 1);
								getMenuItems(category.id);
								dispatch(changeSelectedCategory(category));
							}}
							className={
								selected === index + 1
									? `category-tab-selected`
									: `category-tab`
							}
						>
							<span>{category.name}(4)</span>
							<span>
								<MenuOutlined />
							</span>
						</div>
					))}
			</div>
		</div>
	);
}

export default Category;
