// import './App.css';
import { useState } from "react";
import { HiChevronLeft,HiChevronDown } from "react-icons/hi";
import { AiFillProject,AiOutlineFundProjectionScreen,AiOutlineSetting } from "react-icons/ai";
import { BsSearch,BsCalendarEvent,BsBarChartLine } from "react-icons/bs"
import {LuLayoutDashboard,LuListTodo} from "react-icons/lu"
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { XCircleIcon, ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";



export function SideBar() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const Menus = [
    {title: "My Profile", path:"/doctor/profile"},
    {title: "Nontification", icon: <BsCalendarEvent className="text-[#000000]"/>, path:"/doctor/notification" },
    {title:"Appointment",icon:<LuListTodo className="text-[#000000]"/> ,path:"/doctor/appointment"},
    {title: "Groups", icon:<MdOutlineAccountCircle className="text-[#000000]" />, spacing: true},
    {title: "Reports", icon: <BsBarChartLine className="text-[#000000]" />},
    {title: "Settings", icon: <AiOutlineSetting className="text-[#000000]" />, spacing: true},
    {title: "Logout", icon: <BiLogOut className="text-[#000000]" />}
  ];

  return (
    // <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#E9F7FA] h-screen p-5  pt-8 relative duration-300`}
      >
        <ArrowLongLeftIcon
          className={`text-dark-blue w-7 h-7 rounded-full absolute right-6 top-24 cursor-pointer
          ${!open && "rotate-180"}`} // affect when closing or open the sidemenu
          onClick={() => setOpen(!open)}
        />
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img className="rounded-full object-cover" src={require('../assets/logo.png')}></img>
          </div>
          <h1
            className={`text-black font-bold text-2xl duration-300 mt-4 flex justify-center
            ${!open && "scale-0"}`}
          >
            MentCom
          </h1>
        </div>
      

        <ul className="pt-2">
          {Menus.map((menu, index) =>
            <>
              <li key={index} className={`text-gray-300 tex-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-blue rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`} >
                <Link to={menu.path}>
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <LuLayoutDashboard className="text-[#000000]"/> }
                </span>
                </Link>
                <Link to={menu.path}>
                <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"} text-[#000000]` }>
                  {menu.title}
                </span>
                </Link>
                {menu.submenu && open && (
                  <HiChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => 
                  setsubmenuOpen(!submenuOpen)}/>
                )}
              </li>

              {menu.submenu && submenuOpen && open &&(
                <ul>
                  {menu.submenuItem.map((submenuItem, index)=> (
                    <li key={index} className={`text-gray-300 tex-sm flex item-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-blue rounded-md`}>
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </ul>

      </div>

    
  );
}
