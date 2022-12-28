import { format } from "date-fns";

export const COLUMNS = [
	{
		Header: "Id",
		accessor: "id",
	},
	{
		Header: "Customer Name",
		accessor: "customer_name",
	},
	{
		Header: "Order Time",
		accessor: "order_time",
		// Cell: ({ value }) => {
		// 	return format(new Date(value), "dd/MM/yyyy");
		// },
	},
	{
		Header: "Amount",
		accessor: "amount",
	},
	{
		Header: "Action",
		Cell: ({ value }) => {
			return <button>Complete</button>;
		},
	},
];
