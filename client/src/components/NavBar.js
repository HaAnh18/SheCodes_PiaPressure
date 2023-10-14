import React from 'react'
import { Link } from 'react-router-dom'
import {
  UserIcon,
} from "@heroicons/react/24/solid";
export function NavBar() {
  return (
    <div className="navbar bg-base-100 absolute">
  <div className="flex-1">
    <Link to='/home' className='btn btn-ghost normal-case text-xl'>App name</Link>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        {/* <div className="w-10 rounded-full"> */}
          <UserIcon className='w-6 h-6 pointer-events-none'/>
        {/* </div> */}
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link to='/user'>Profile</Link>
          {/* <a className="justify-between">
            Profile
          </a> */}
        </li>
        <li>
        <Link to='/logout'>Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</div>
  )
}