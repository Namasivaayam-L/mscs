import React, { useMemo } from 'react'
import { Box } from '@mui/material'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Map = () => {

  // let center = {lat: 30, lng: -110};
  // let map =  new google.maps.Map(document.getElementById("map"), {
  //   center,
  //   zoom: 8
  // })
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <Box id="map">
            {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
    </Box>
  )
}

export default Map