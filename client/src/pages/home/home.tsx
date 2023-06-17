import React from 'react'
import Paperbase from '../../components/dashboard/Paperbase'
import Navbar from '../../components/navbar/navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      {/* <CollapsibleTable/> */}
      <Paperbase/>
    </div>
  )
}

export default Home