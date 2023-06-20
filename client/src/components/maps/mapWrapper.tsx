import { Box } from '@mui/material'
import React from 'react'
import LocationsList from './locations'
import Map from './map'

const MapWrapper = () => {
  return (
    <Box sx={{display:'flex'}}>
      <Box sx={{flex:1}}>
        <LocationsList/>
      </Box>  
      <Box sx={{flex:2}}>
        <Map/>
      </Box>        
    </Box>
  )
}

export default MapWrapper