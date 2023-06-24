import React from 'react'
import Navbar from '../../components/navbar/navbar'
import { Box } from '@mui/material'
import AppNavig from '../../components/dashboard/appNavig'

const Home = () => {
  return (
    <Box>
      <Navbar/>
      <AppNavig/>
    </Box>
  )
}

export default Home