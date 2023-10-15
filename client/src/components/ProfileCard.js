import React from "react";
import {
  StarIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function ProfileCard({status, name}) {
  return (
    <div className="flex flex-col bg-gray-100 p-4 w-full rounded-xl">
      <div className="flex ">
        <div className="w-2/5 ">
          <img className="rounded-full h-20 w-20 object-cover " src={require('../assets/doctor.png')}></img>
        </div>

        <div className="flex justify-center flex-col ">
          <p className="font-semibold ">{name}</p>
          <p className="text-sm text-gray-400">Psychologist</p>
        </div>
      </div>

      <div className="mt-4 flex">
        <span className="font-semibold pr-4">Rating</span>
        <StarIcon className="h-6 w-6 text-yellow-300"/>
        <span className="font-semibold">4.8</span>
      </div>

      <div className="mt-3 flex">
        <span className="font-semibold pr-5">Status</span>
        {status === "Online" ?
        <span className="text-green-600">{status}</span>
        :
        <span className="text-yellow-700">{status}</span>
        }
        
      </div>

      <div className="flex justify-around mt-4 cursor-pointer	">
        <button className="btn rounded-3xl bg-[#6699CF] hover:bg-white hover:text-[#6699CF] hover:border-[#6699CF] text-white m-0 px-4 text-xs">
        <Link to={'/profile'}>View profile</Link>
        </button>
        <button className="btn rounded-3xl bg-black hover:bg-white hover:text-black hover:border-black text-white m-0 px-4 text-xs">
          <Link to={'/book'}>Book now</Link>
        </button>
      </div>
    </div>
  )
}