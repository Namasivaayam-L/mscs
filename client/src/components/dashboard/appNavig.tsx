import { TabContext, TabList, TabPanel } from '@mui/lab'
import { AppBar, Box, Tab } from '@mui/material'
import React from 'react'
import Fail from '../fallback/fail';
import SignInSide from '../../pages/auth/signInSide';
import Header from '../charts/Header';
import Table from '../tables/tables/table';
import RegSocietiesList from '../tables/regSocieties/regSocietiesList';
import Forms from '../forms/forms';
import MscsActWrapper from '../mscsAct/mscsActWrapper';

const AppNavig = () => {
	const [value, setValue] = React.useState("Charts");

  return (
    <Box>
      <TabContext value={value}>
        <AppBar color="primary" position="static" elevation={1}>
          <TabList
          textColor="inherit"
          onChange={(e: any, newValue: string) => {
            setValue(newValue);
          }}
          variant="scrollable"
          scrollButtons="auto"
          centered
          >
            <Tab value="Authentication" label="Authentication" />
            <Tab value="Charts" label="Charts" />
            <Tab value="Tables" label="Tables" />
            <Tab value="Registered Societies" label="Registered Societies" />
            <Tab value="Forms" label="Forms" />
            <Tab value="MSCS Act" label="MSCS Act" />
            <Tab value="About me" label="About me" />
            <Tab value="Maps" label="Maps" />
            <Tab value="Application" label="Application" />
            <Tab value="MSCS-MIS" label="MSCS-MIS" />
            <Tab value="Reports" label="Reports" />
            <Tab value="Liquidation" label="Liquidation" />
            <Tab value="Banks" label="Banks" />
          </TabList>
        </AppBar>
        <Box>
          <TabPanel value="Authentication">
          <SignInSide setValue={ setValue } />
          </TabPanel>
          <TabPanel value="Charts">
            <Header />
          </TabPanel>
          <TabPanel value="Tables">
            <Table/>	
          </TabPanel>
          <TabPanel value="Registered Societies">
            <Box sx={{display:'flex',justifyContent:'center'}} >
              <RegSocietiesList />	
            </Box>	
          </TabPanel>
          <TabPanel value="Forms">
            <Box sx={{display:'flex',justifyContent:'center'}} >
              <Forms />	
            </Box>	
          </TabPanel>
          <TabPanel value="MSCS Act">
            <Box sx={{display:'flex',justifyContent:'center'}} >
              <MscsActWrapper />	
            </Box>	
          </TabPanel>
          <TabPanel value="About me">
            			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Fail/>
			</Box>	
          </TabPanel>
          <TabPanel value="Maps">
            			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Fail/>
			</Box>	
          </TabPanel>
          <TabPanel value="Application">
            			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Fail/>
			</Box>	
          </TabPanel>
          <TabPanel value="MSCS-MIS">
            			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Fail/>
			</Box>	
          </TabPanel>
          <TabPanel value="Reports">
            			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Fail/>
			</Box>	
          </TabPanel>
          <TabPanel value="Liquidation">
            			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Fail/>
			</Box>	
          </TabPanel>
          <TabPanel value="Banks">
            			<Box sx={{display:'flex',justifyContent:'center'}} >
				<Fail/>
			</Box>	
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  )
}

export default AppNavig