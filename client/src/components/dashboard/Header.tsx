import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from '@mui/lab';
import ChartWrapper from '../charts/chartWrapper';

// const lightColor = 'rgba(255, 255, 255, 0.7)';
// eslint-disable-next-line 
interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
  const { onDrawerToggle } = props;
  const [value, setValue] = React.useState('stateWise')
  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs>
              <Typography color="inherit" variant="h4" component="h1">
                Charts
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      {/* </AppBar> */}
      {/* <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 1 }}> */}
        <TabContext value={value}>
          <TabList textColor="inherit" onChange={(e: any, newValue: string) => setValue(newValue)}>
              <Tab value="stateWise" label="State Wise" />
              <Tab value="typeWise" label="Type Wise" />
              <Tab value="yearWise" label="Year Wise" />
          </TabList>
          <TabPanel value="stateWise">
              <ChartWrapper value={value} prompt={'This represent the data in State - Wise'}/>
          </TabPanel>
          <TabPanel value="yearWise">
              <ChartWrapper value={value} prompt={'This represent the data in Year - Wise'}/>
          </TabPanel>
          <TabPanel value="typeWise">
              <ChartWrapper value={value} prompt={'This represent the data in Type - Wise'}/>
          </TabPanel> 
        </TabContext>
      </AppBar>
    </React.Fragment>
  );
}
