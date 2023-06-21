import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../charts/Header';
import SignInSide from '../../pages/auth/signInSide';
import Table from '../tables/tables/table';
import MapWrapper from '../maps/mapWrapper';
import RegSocietiesList from '../tables/regSocieties/regSocietiesList';
import Forms from '../forms/forms';
import MscsActWrapper from '../mscsAct/mscsActWrapper';
import Fail from '../fallback/fail';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;
  
	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`vertical-tabpanel-${index}`}
		aria-labelledby={`vertical-tab-${index}`}
		{...other}
		style={{ flexGrow: 1, flexShrink:0}}
	  >
		{value === index && (
		  <Box sx={{ p: 2 }}>
			<Typography>{children}</Typography>
		  </Box>
		)}
	  </div>
	);
  }
  
  function a11yProps(index: number) {
	return {
	  id: `vertical-tab-${index}`,
	  'aria-controls': `vertical-tabpanel-${index}`,
	};
  }
  

const Navigator = () => {
	const [value, setValue] = React.useState(6);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
	  setValue(newValue);
	};

	return (
	  <Box
		sx={{ bgcolor: 'background.paper', display: 'flex'}}
		>
		<Box sx={{flex:1, maxWidth:'250px', backgroundColor:'#e6e8e7'}}>
			<Tabs
			orientation="vertical"
			value={value}
			onChange={handleChange}
			aria-label="Vertical tabs example"
			sx={{ borderRight: 1, borderColor: 'divider' }}
			>
				<Tab label="Authentication" {...a11yProps(0)} />
				<Tab label="Charts" {...a11yProps(1)} />
				<Tab label="Tables" {...a11yProps(2)} />
				<Tab label="Maps" {...a11yProps(3)} />
				<Tab label="Registered Societies" {...a11yProps(4)} />
				<Tab label="Forms" {...a11yProps(5)} />
				<Tab label="MSCS Act" {...a11yProps(6)} />
				<Tab label="Application" {...a11yProps(7)} />
				<Tab label="MSCS-MIS" {...a11yProps(8)} />
				<Tab label="Reports" {...a11yProps(9)} />
				<Tab label="Liquidation" {...a11yProps(10)} />
				<Tab label="Banks" {...a11yProps(11)} />
			</Tabs>
		</Box>			
		
		<Box sx={{height:850, flexGrow:1}}>
		<TabPanel value={value} index={0}>
			<SignInSide setValue={ setValue } />
		</TabPanel>
		<TabPanel value={value} index={1}>
			<Header />
		</TabPanel>
		<TabPanel value={value} index={2}>
			<Table/>	
		</TabPanel>
		<TabPanel value={value} index={3}>
			<MapWrapper/>	
		</TabPanel>
		<TabPanel value={value} index={4}>
			<Box sx={{display:'flex',justifyContent:'center'}} >
				<RegSocietiesList />	
			</Box>	
		</TabPanel>
		<TabPanel value={value} index={5}>
			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Forms />	
			</Box>	
		</TabPanel>
		<TabPanel value={value} index={6}>
			<Box sx={{display:'flex',justifyContent:'center'}} >
				<MscsActWrapper />	
			</Box>	
		</TabPanel>
		<TabPanel value={value} index={7}>
			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Fail/>
			</Box>	
		</TabPanel>
		<TabPanel value={value} index={8}>
			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Fail/>
			</Box>	
		</TabPanel>
		<TabPanel value={value} index={9}>
			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Fail/>
			</Box>	
		</TabPanel>
		<TabPanel value={value} index={10}>
			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Fail/>
			</Box>	
		</TabPanel>
		<TabPanel value={value} index={11}>
			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Fail/>
			</Box>	
		</TabPanel>
		</Box>

	  </Box>
  )
}

export default Navigator