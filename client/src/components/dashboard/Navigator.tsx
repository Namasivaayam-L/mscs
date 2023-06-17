import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

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



const categories = [
  {
    id: 'Dashboard',
    children: [
      {
        no:1,
        id: 'Authentication',
        icon: <PeopleIcon />,
        active: true,
      },
      {no:2, id: 'Visualization', icon: <DnsRoundedIcon /> },
      {no:3, id: 'Tables', icon: <PermMediaOutlinedIcon /> },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          MSCS
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>CRCS</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33', color:'white' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            <Tabs sx={{ color: '#fff', textDecoration:'none'}}>
            {children.map(({ no, id: childId, icon, active }) => (
              <Tab label={ childId } {...a11yProps(no-1)} />
            ))}
            </Tabs>
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
