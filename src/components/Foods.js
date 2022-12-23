import React from "react";
import "../styles/Foods.css";
import { EditFilled } from "@ant-design/icons";
import Food from "./Food";

function Foods() {
	return (
		<div className="foods-main">
			<div>
				Entree <EditFilled style={{ color: "blue" }} />
			</div>
			<div className="card-main">
				<Food />
			</div>
		</div>
	);
}

export default Foods;
