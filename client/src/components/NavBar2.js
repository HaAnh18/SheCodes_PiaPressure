import React from 'react'
import { Link } from 'react-router-dom'
import {
  UserIcon,
} from "@heroicons/react/24/solid";

export function NavBar2() {
  return (
    <div className="navbar h-20 bg-[#E9F7FA]">
  <div className="flex-1">
    <img src={require('../assets/logo.png')}></img>
    <Link to="/home" className="pl-3 normal-case text-xl">
          <img src={require('../assets/name.png')}></img>
        </Link>
  </div>
  <div className="flex-none">
      <label tabIndex={0} className="btn btn-ghost m-2">
          <Link to={"/signin"}>
          Sign in 
          </Link>
  
      </label>

      <label tabIndex={1} className="btn btn-ghost bg-[#343A40] text-white hover:text-black">

        <Link to={"/signup"}>
        Sign up
        </Link>
  
      </label>
  
  </div>
</div>
  )
}