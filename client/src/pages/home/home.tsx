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
  const [open,] = React.useState(true);
  return (
    <Box>
      <Navbar/>
      <AppNavig/>
      <Snackbar open={open} autoHideDuration={100000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          If you don't see any visualization, it means the free hosting server is gone into sleep mode,
          please wait for 30 seconds-1 minute and refresh or switch tabs in visualization.
        </Alert>
      </Snackbar>
      <Snackbar open={open} autoHideDuration={100000}>
        <Alert severity="success" sx={{ width: '100%' }}>
          If you can't see any visualization even after 2 minutes,
          please alert me through this mail-id : <a href="mailto:namasivaayam007vijay_ai@mepcoeng.ac.in">namasivaayam007vijay_ai@mepcoeng.ac.in</a>
          Thank you so much.
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Home
