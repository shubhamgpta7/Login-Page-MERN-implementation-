import React from 'react'
import Navbar from './Navbar'

import Carousel from './Carousel'
import Description from './Description'



import './homepage.css';

function Home() {
  return (
    <div className='container'>
        <Navbar/>
        <Carousel/>
        <Description/>
        <div className="btn btn-danger my-3" >Logout</div>
    </div>
  )
}

export default Home