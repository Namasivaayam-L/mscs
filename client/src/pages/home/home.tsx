import React from 'react'
import Navbar from '../../components/navbar/navbar'
import { Box } from '@mui/material'
import AppNavig from '../../components/dashboard/appNavig'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Home = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Box>
      <Navbar/>
      <AppNavig/>
      <Snackbar open={open} autoHideDuration={100000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          If you don't see any visualization, it means the free hosting server is gone into sleep mode,
          please wait for 30-1min and refresh and switch tabs 
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Home
