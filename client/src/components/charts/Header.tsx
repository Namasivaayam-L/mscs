import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from '@mui/lab';
import ChartWrapper from '../charts/chartWrapper';
import { Box } from '@mui/material';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Toolbar from "@mui/material/Toolbar";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";


export default function Header() {
  const [value, setValue] = React.useState('yearWise')
	const [type, setType] = React.useState("Doug");
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  
  return (
    <React.Fragment>
      <Box >
        <TabContext value={value}>
        <AppBar color="primary" position="sticky" elevation={1}>
          <TabList textColor="inherit" onChange={(e: any, newValue: string) => setValue(newValue)}>
              <Tab value="stateWise" label="State Wise" />
              <Tab value="districtWise" label="District Wise" />
              <Tab value="typeWise" label="Type Wise" />
              <Tab value="yearWise" label="Year Wise" />
          </TabList>
          </AppBar>
          <AppBar
				position="static"
				color="default"
				elevation={1}
				sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}
			>
				<Toolbar>
					<Grid container margin="20px">
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
								<MenuItem value="Doug">Doughnut</MenuItem>
								<MenuItem value="Line">Line</MenuItem>
								<MenuItem value="Bar">Bar</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Toolbar>
			</AppBar>
      <Box sx={{width:"100%"}}>
          <TabPanel value="stateWise">
              <ChartWrapper value={value} type={type} prompt={'This represent the data in State - Wise'}/>
          </TabPanel>
          <TabPanel value="districtWise">
              <ChartWrapper value={value} type={type} prompt={'This represent the data in State - Wise'}/>
          </TabPanel>
          <TabPanel value="yearWise">
              <ChartWrapper value={value} type={type} prompt={'This represent the data in Year - Wise'}/>
          </TabPanel>
          <TabPanel value="typeWise">
              <ChartWrapper value={value} type={type} prompt={'This represent the data in Type - Wise'}/>
          </TabPanel>
        </Box>  
        </TabContext>
      </Box>
    </React.Fragment>
  );
}
