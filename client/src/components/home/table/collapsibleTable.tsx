import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { server_url } from "../../../config/config";
import Row from "./row";

interface row {
	_id: string;
	name_of_society: string;
	address: string;
	state: string;
	district: string;
	date_of_registration: string;
	area_of_operation: string;
	sector_type: string;
}

interface rowData {
	name_of_society: string;
	district: string;
	state: string;
	sector_type: string;
	collapse: {
		address: string;
		date_of_registration: string;
		area_of_operation: string;
	};
}

function createData(
	name_of_society: string,
	address: string,
	state: string,
	district: string,
	date_of_registration: string,
	area_of_operation: string,
	sector_type: string
) {
	return {
		name_of_society,
		district,
		state,
		sector_type,
		collapse: {
			address,
			date_of_registration,
			area_of_operation,
		},
	};
}

export default function CollapsibleTable() {
	const [rowData, setRowData] = React.useState<Array<rowData>>([]);
	const setData = React.useCallback((rows: row[]) => {
		let r = rows.map((row: row) =>
			createData(
				row.name_of_society,
				row.address,
				row.state,
				row.district,
				row.date_of_registration,
				row.area_of_operation,
				row.sector_type
			)
		);
		setRowData(r);
		// console.log(r);
	}, []);
	React.useEffect(() => {
		const getData = async () => {
			let { data: res } = await axios.get(
				server_url + "/get/getSocietyData"
			);
			// console.log(res)
			setData(res);
		};
		getData();
	}, [setData]);

	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>Name Of Society (100g serving)</TableCell>
						<TableCell align="right">District</TableCell>
						<TableCell align="right">State</TableCell>
						<TableCell align="right">Sector Type</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rowData.map((row: rowData) => (
						<Row key={row.name_of_society} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
