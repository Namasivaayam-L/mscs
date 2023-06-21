import React from 'react'
import { Paper } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import PDFViewer from './pdfViewer';


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Forms = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Paper sx={{ width: '80%', height: '100%' }}>
      <Box sx={{ bgcolor: 'background.paper' }}>
        <AppBar position="static" sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="I" {...a11yProps(0)} />
            <Tab label="II" {...a11yProps(1)} />
            <Tab label="III" {...a11yProps(2)} />
            <Tab label="IV" {...a11yProps(3)} />
            <Tab label="V" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <PDFViewer value={value}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <PDFViewer value={value}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <PDFViewer value={value}/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <PDFViewer value={value}/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <PDFViewer value={value}/>
        </TabPanel>
      </Box>
    </Paper>
  )
}

export default Forms