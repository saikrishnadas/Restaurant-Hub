import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../MOCK_DATA.json";
import { COLUMNS } from "../common/columns";
import "../styles/Table.css";

function OpenOrders({ orders }) {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => orders, [orders]);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns: columns, data: data });
	return (
		<>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render("Header")}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default OpenOrders;
