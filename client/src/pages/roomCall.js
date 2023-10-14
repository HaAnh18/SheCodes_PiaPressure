import React from 'react'
import { NavBar } from '../components/NavBar'

export default function RoomCall() {
  return (
    <div>
      <NavBar/>
      <div className='mt-10 px-10 '>
        <img src={require('../assets/roomcall.png')}></img>
      </div>
    </div>
  )
}