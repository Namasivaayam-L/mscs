import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../charts/Header';

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
		  <Box sx={{ p: 3 }}>
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
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
	  setValue(newValue);
	};

	return (
	  <Box
		sx={{ bgcolor: 'background.paper', display: 'flex'}}
		>
		<Box sx={{flex:1, maxWidth:'300px'}}>
			<Tabs
			orientation="vertical"
			value={value}
			onChange={handleChange}
			aria-label="Vertical tabs example"
			sx={{ borderRight: 1, borderColor: 'divider' }}
			>
				<Tab label="Charts" {...a11yProps(0)} />
				<Tab label="Item Two" {...a11yProps(1)} />
			</Tabs>
		</Box>			
		<TabPanel value={value} index={0}>
			<Header />
		</TabPanel>
		<TabPanel value={value} index={1}>
		Item Two
		</TabPanel>

	  </Box>
  )
}

export default Navigator