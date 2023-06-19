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

export default function CollapsibleTable(props:any) {
	const [rowData, setRowData] = React.useState<Array<rowData>>([]);
	const [searchData, setSearchData] = React.useState<Array<rowData>>([]);
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
	React.useEffect(() => {
		const filterString = (attr: string = 'name_of_society', str: string) => {
			str === ''? setSearchData([]) :setSearchData(rowData.filter((row:any)=>row[attr].toLowerCase().includes(str.toLowerCase())))
		}
		filterString(props.attr, props.search)
	},[props.attr,props.search,rowData])

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer component={Paper} sx={{ maxHeight: 630 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell><h2>Name Of Society</h2></TableCell>
							<TableCell align="right"><h2>District</h2></TableCell>
							<TableCell align="right"><h2>State</h2></TableCell>
							<TableCell align="right"><h2>Sector Type</h2></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							props.search===''?
							rowData.map((row: rowData) => (
								<Row key={row.name_of_society} iD={'org'} row={row} />
							))
								:
							searchData.map((row: rowData) => (
								<Row key={row.name_of_society} iD={'search'}  row={row} />
							))
						}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
}
