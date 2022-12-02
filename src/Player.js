import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

function Player({spotify}) {
  return (
    <div className='player'>
        <div className='player__body'>
        {/* Sidebar */}
        {/* body */}
        <Sidebar />
        <Body />
        </div>
        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Player