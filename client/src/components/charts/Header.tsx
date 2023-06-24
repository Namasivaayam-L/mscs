import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from "@mui/lab";
import ChartWrapper from "../charts/chartWrapper";
import { Box, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Toolbar from "@mui/material/Toolbar";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function Header() {
	const [value, setValue] = React.useState("stateWise");
	const [type, setType] = React.useState("Doug");
	const [isDate, setIsDate] = React.useState(false);
	const [minDate, setMinDate] = React.useState<Dayjs | null>(dayjs('2002-01-01T21:11:54'));
	const [maxDate, setMaxDate] = React.useState<Dayjs | null>(dayjs());
	const handleChange = (event: SelectChangeEvent) => {
		setType(event.target.value as string);
	};

	return (
		<React.Fragment>
			<Box>
				<TabContext value={value}>
					<AppBar color="primary" position="static" elevation={1}>
						<TabList
							textColor="inherit"
							onChange={(e: any, newValue: string) => {
								newValue === "dateRange"
									? setIsDate(true)
									: setIsDate(false);
								setValue(newValue);
							}}
							variant="scrollable"
							scrollButtons="auto"
							centered
						>
							<Tab value="stateWise" label="State Wise" />
							<Tab value="districtWise" label="District Wise" />
							<Tab value="typeWise" label="Type Wise" />
							<Tab value="yearWise" label="Year Wise" />
							<Tab value="dateRange" label="Date Range" />
						</TabList>
					</AppBar>
					<AppBar
						position="static"
						color="default"
						elevation={1}
						sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}
					>
						<Toolbar>
							<Grid container margin="10px">
								<FormControl fullWidth>
									<Box sx={{display:'flex', gap:5}}>
                    <Box sx={ !isDate?{width:'100%'}:{}}>
                      <Typography>Chart Type</Typography>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={type}
												label="Type"
												onChange={handleChange}
												sx={ !isDate?{width:'100%'}:{} }
											>
												<MenuItem value="Doug">
													Doughnut
												</MenuItem>
												<MenuItem value="Bar">
													Bar
												</MenuItem>
												<MenuItem value="Line">
													Line
												</MenuItem>
											</Select>
										</Box>
										<Box>
											{
												isDate && 
												<>
													<br />
													<LocalizationProvider dateAdapter={AdapterDayjs}>
														<Box sx={{display:'flex', gap:5}}>
															<DesktopDatePicker
																label="Start Date"
																value={minDate}
																onChange={(newValue: Dayjs | null)=>setMinDate(newValue)}
															/>
															<DesktopDatePicker
																label="End Date"
																value={maxDate}
																onChange={(newValue: Dayjs | null)=>setMaxDate(newValue)}
															/>
														</Box>
													</LocalizationProvider>
												</>
											}
										</Box>
									</Box>
								</FormControl>
							</Grid>
						</Toolbar>
					</AppBar>
					<Box>
						<TabPanel value="stateWise">
							<ChartWrapper
								value={value}
								type={type}
								prompt={
									"This represents the data in State - Wise"
								}
							/>
						</TabPanel>
						<TabPanel value="districtWise">
							<ChartWrapper
								value={value}
								type={type}
								prompt={
									"This represents the data in State - Wise"
								}
							/>
						</TabPanel>
						<TabPanel value="yearWise">
							<ChartWrapper
								value={value}
								type={type}
								prompt={
									"This represents the data in Year - Wise"
								}
							/>
						</TabPanel>
						<TabPanel value="typeWise">
							<ChartWrapper
								value={value}
								type={type}
								prompt={
									"This represents the data in Type - Wise"
								}
							/>
						</TabPanel>
						<TabPanel value="dateRange">
							<ChartWrapper
								value={value}
								type={type}
								prompt={
									"This represents the data between a Date range "
								}
								dates={[minDate,maxDate]}
							/>
						</TabPanel>
					</Box>
				</TabContext>
			</Box>
		</React.Fragment>
	);
}
