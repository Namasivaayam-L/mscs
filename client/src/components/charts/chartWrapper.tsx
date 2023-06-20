import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chart from "./chart";
import { server_url } from "../../config/config";
import axios from "axios";
import DateRangeTable from "./dateRangeTable";

export default function ChartWrapper(props: any) {
	const [name] = React.useState(props.value);
	const [data, setData] = React.useState<Array<number>>([]);
	const [labels, setLabels] = React.useState<Array<string>>([]);

	const setDataLabel = React.useCallback((Data: any) => {
		let lb: string[] = [];
		let da: number[] = [];
		Data.map((d: any) => {
			lb.push(d["_id"]);
			da.push(d["total"]);
			return 1;
		});
		setLabels(lb);
		setData(da);
	}, []);

	React.useEffect(() => {
		const getData = async () => {
			const { data: res } =
				props.value !== "dateRange"
					? await axios.get(server_url + "/chart/" + props.value)
					: await axios.post(server_url + "/chart/" + props.value, {
							minDate: props.dates[0],
							maxDate: props.dates[1],
					  });
				props.value !== "dateRange"?setDataLabel(res):setData(res)
		};
		getData();
	}, [setDataLabel, props]);

	return props.value !== "dateRange" ? (
		<>
			<Paper
				sx={
					props.type === "Doug"
						? { maxWidth: 600, margin: "auto", overflow: "hidden" }
						: { maxWidth: 1200, margin: "auto", overflow: "hidden" }
				}
				elevation={21}
			>
				<Typography sx={{ m: "" }} color="text.primary" align="center">
					{props.prompt}
					<Chart
						type={props.type}
						name={name}
						data={data}
						labels={labels}
						title={props.value}
					/>
				</Typography>
			</Paper>
		</>
	) : (
			<>
				<DateRangeTable data={data} />
			</>
	);
}
