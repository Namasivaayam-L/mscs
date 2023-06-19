import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chart from "./chart";
import { server_url } from "../../config/config";
import axios from "axios";

export default function ChartWrapper(props: any) {
	const [name, setName] = React.useState(props.value);
	const [data, setData] = React.useState<Array<number>>([]);
	const [labels, setLabels] = React.useState<Array<string>>([]);

  const setDataLabel = React.useCallback(
    (Data: any) => {
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
			const { data: res } = await axios.get(
				server_url + "/chart/" + props.value
			);
			// console.log(res);
      setDataLabel(res)
		};
		getData();
	}, [setDataLabel]);

	return (
		<Paper sx={{ maxWidth: 1000, margin: "auto", overflow: "hidden" }}>
			<Typography
				sx={{ my: 5, mx: 2 }}
				color="text.secondary"
				align="center"
			>
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
	);
}
