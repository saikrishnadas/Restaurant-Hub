import { doc, updateDoc } from "@firebase/firestore";
import { db } from "./firebase-config";

const handleCompleteOrder = async (value) => {
	const orderDoc = doc(db, "orders", value); //value here is the id of the order
	const newData = { status: "completed" };
	await updateDoc(orderDoc, newData);
};

export const COLUMNS = [
	{
		Header: "Customer Name",
		accessor: "customer_name",
	},
	{
		Header: "Order Time",
		accessor: "order_time",
	},
	{
		Header: "Amount",
		accessor: "amount",
	},
	{
		Header: "Status",
		accessor: "status",
	},
	{
		Header: "Action",
		accessor: "id",
		Cell: ({ value }) => {
			return (
				<button onClick={() => handleCompleteOrder(value)}>Complete</button>
			);
		},
	},
];
