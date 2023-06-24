import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Navigator from '../../components/dashboard/Navigator'
import { Box } from '@mui/material'
import AppNavig from '../../components/dashboard/appNavig'

const Home = () => {
  return (
    <Box>
      <Navbar/>
      {/* <Navigator /> */}
      <AppNavig/>
    </Box>
  )
}

export default Home