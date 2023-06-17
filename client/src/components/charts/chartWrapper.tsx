import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chart from "./chart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { server_url } from "../../config/config";
import axios from "axios";

export default function ChartWrapper(props: any) {
	const [type, setType] = React.useState("");
	const [name, setName] = React.useState(props.value);
	const [data, setData] = React.useState<Array<number>>([]);
	const [labels, setLabels] = React.useState<Array<string>>([]);
	const [swData, setSwData] = React.useState([]);
	const [twData, setTwData] = React.useState([]);
	const [ywData, setYwData] = React.useState([]);
	const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  
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
			console.log(res);
      setData(res);
      setDataLabel(res)
		};
		getData();
	}, [setDataLabel]);

	return (
		<Paper sx={{ maxWidth: 1000, margin: "auto", overflow: "hidden" }}>
			<AppBar
				position="static"
				color="default"
				elevation={0}
				sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
			>
				<Toolbar>
					<Grid container margin="10px">
						<Typography>{props.title}</Typography>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								Chart Type
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={type}
								label="Type"
								onChange={handleChange}
							>
								<MenuItem value="Line">Line</MenuItem>
								<MenuItem value="Bar">Bar</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Toolbar>
			</AppBar>
			<Typography
				sx={{ my: 5, mx: 2 }}
				color="text.secondary"
				align="center"
			>
				{props.prompt}
				<Chart
					type={type}
					name={name}
					data={data}
					labels={labels}
					title={props.value}
				/>
			</Typography>
		</Paper>
	);
}
