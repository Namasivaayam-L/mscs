import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import CollapsibleTable from './collapsibleTable';


export default function Table() {
  const [value, setValue] = React.useState('all')
	const [type, setType] = React.useState("asc");
	const [attr, setAttr] = React.useState('name_of_society')
	const [search, setSearch] = React.useState('')
  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  
  const handleChangeAttr = (event: SelectChangeEvent) => {
    setAttr(event.target.value as string);
  };
  
  return (
    <React.Fragment>
      <Box sx={{m:-2}}>
        <TabContext value={value}>
        <AppBar color="primary" position="sticky" elevation={1}>
          <TabList textColor="inherit" onChange={(e: any, newValue: string) => setValue(newValue)}>
              <Tab value="all" label="All" />
          </TabList>
          </AppBar>
          <AppBar
				position="static"
				color="default"
				elevation={1}
				sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}
			>
				<Toolbar>
					<Grid container margin="10px" sx={{ display: 'flex'}}>
						<Box sx={{ width: '33%' }}>
							<InputLabel id="demo-simple-select-label">
								 Search
							</InputLabel>
							<TextField sx={{ width: "100%" }} onChange={ (e:any)=>setSearch(e.target.value) } disabled={ attr==='date_of_registration'?true:false } />		
						</Box>		
						<Box sx={{width:'33%'}}>
							<InputLabel id="demo-simple-select-label">
								 Search in
							</InputLabel>
							<Select sx={{width:"100%"}}
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={attr}
								onChange={handleChangeAttr}
							>
								<MenuItem value="name_of_society">name_of_society</MenuItem>
								<MenuItem value="address">address</MenuItem>
								<MenuItem value="state">state</MenuItem>
								<MenuItem value="district">district</MenuItem>
								<MenuItem value="date_of_registration">date_of_registration</MenuItem>
								<MenuItem value="area_of_operation">area_of_operation</MenuItem>
								<MenuItem value="sector_type">sector_type</MenuItem>
							</Select>
						</Box>
						<Box sx={{width:'33%'}}>
							<InputLabel id="demo-simple-select-label">
								 Filter Type
							</InputLabel>
							<Select sx={{width:"100%"}}
								labelId="demo-simple-select-labels2"
								id="demo-simple-select2"
								value={type}
								onChange={handleChangeType}
							>
								<MenuItem value="asc">asc</MenuItem>
								<MenuItem value="desc">desc</MenuItem>
								<MenuItem value="old_first">old_first</MenuItem>
								<MenuItem value="new_first">new_first</MenuItem>
							</Select>
						</Box>
					</Grid>
				</Toolbar>
			</AppBar>
          <TabPanel value="all">
              <CollapsibleTable search={search} attr={attr} type={type} />  
          </TabPanel>
        </TabContext>
      </Box>
    </React.Fragment>
  );
}
