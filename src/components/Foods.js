import React, { useState, useEffect } from "react";
import "../styles/Foods.css";
import { EditFilled } from "@ant-design/icons";
import Food from "./Food";
import { getDocs, collection } from "@firebase/firestore";
import { db } from "../common/firebase-config";

function Foods() {
	const [menu, setMenu] = useState([]);
	const menuCollectionRef = collection(db, "menu");

	useEffect(() => {
		const getMenuItems = async () => {
			const data = await getDocs(menuCollectionRef);
			const menuItems = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
			setMenu(menuItems);
		};
		getMenuItems();
	}, []);
	return (
		<div className="foods-main">
			<div>
				Entree <EditFilled style={{ color: "blue" }} />
			</div>
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
