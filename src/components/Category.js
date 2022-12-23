import React, { useState } from "react";
import "../styles/Category.css";
import { MenuOutlined } from "@ant-design/icons";
import Foods from "./Foods";

function Category() {
	const [selected, setSelected] = useState(1);
	return (
		<div className="category-main">
			<span className="category-header">
				<span>Category</span>
				<span>+ Add</span>
			</span>
			<div className="category-tabs">
				<div
					onClick={() => setSelected(1)}
					className={selected === 1 ? `category-tab-selected` : `category-tab`}
				>
					<span>Entree(4)</span>
					<span>
						<MenuOutlined />
					</span>
				</div>
				<div
					onClick={() => setSelected(2)}
					className={selected === 2 ? `category-tab-selected` : `category-tab`}
				>
					<span>Drink(2)</span>
					<span>
						<MenuOutlined />
					</span>
				</div>
				<div
					onClick={() => setSelected(3)}
					className={selected === 3 ? `category-tab-selected` : `category-tab`}
				>
					<span>Appetizer(18)</span>
					<span>
						<MenuOutlined />
					</span>
				</div>
				<div
					onClick={() => setSelected(4)}
					className={selected === 4 ? `category-tab-selected` : `category-tab`}
				>
					<span>Rice Bowl(6)</span>
					<span>
						<MenuOutlined />
					</span>
				</div>
			</div>
		</div>
	);
}

export default Category;
