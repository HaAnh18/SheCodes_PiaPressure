import React from "react";
import { Link } from "react-router-dom";
import { UserIcon, BellIcon } from "@heroicons/react/24/outline";

export function NavBar() {
  return (
    <div className="navbar h-20 bg-[#E9F7FA]">
      <div className="flex-none">
        <img src={require("../assets/logo.png")}></img>
        <Link to="/home" className="pl-3 normal-case text-xl">
          <img src={require('../assets/name.png')}></img>
        </Link>
      </div>
      <div className="flex-1 justify-center">
        <div className="mx-3 hover:border-b-2 hover:border-[#6699CF] ">
          <Link>Resources</Link>
        </div>

        <div className="mx-3 hover:border-b-2 hover:border-[#6699CF] ">
          <Link to={"/find"}>Find a MentCom</Link>
        </div>

        <div className="mx-3 hover:border-b-2 hover:border-[#6699CF] ">
          <Link to={'/roomcall'}>Room</Link>
        </div>

        <div className="mx-3 hover:border-b-2 hover:border-[#6699CF] ">
          <Link>Plan</Link>
        </div>
      </div>
      <div className="flex-none w-64 justify-end flex">
        {/* <div className="dropdown dropdown-end"> */}
          {/* <div tabIndex={0} className="">
            <img className="rounded-full  object-cover px-2" src={require('../assets/user.jpg')}></img>
            <span>Ha Anh</span>
          </div> */}
          <BellIcon className="h-6 w-6 mr-3"/>
          {/* <div className="flex justify-center items-center">
            <BellIcon className="mr-2"/>
          <Link to={'/user'} className="flex justify-center items-center">
          <img
            className="rounded-full w-10 h-10 mr-3 object-cover"
            src={require("../assets/user.jpg")}
          ></img>
          <p clas>Ha Anh</p>
          </Link>
        </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/user">Profile</Link>
             
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul> */}

<div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={require('../assets/user.jpg')} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to={"/home"} className="justify-between">
            Profile
          </Link>
        </li>
        <li>
          <Link to={"/appointment"} className="justify-between">
            Appointments
          </Link>
        </li>    

        <li>
          <Link to={"/landing"} className="justify-between">
            Logout
          </Link>
        </li>        

      </ul>
    </div>

    <div className="px-4 font-semibold">Ha Anh</div>
      </div>
    </div>
  );
}
