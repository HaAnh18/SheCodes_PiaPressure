import React, { useState } from "react";
import { Form } from "../components/Form";
import HiddenRadio from "../components/HiddenRadio";
import { Input } from "../components/Input";
import { InputForm } from "../components/InputForm";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Book from "../components/Book";
import { NavBar } from "../components/NavBar";
import { CalendarCustom } from "../components/Calendar";

export default function Profile() {
  const [openBook, setOpenBook] = useState(true);
  const onClick = async(e) => {
    e.preventDefault();
    if (openBook) {
      setOpenBook(false)
    } else {
      setOpenBook(true)
    }
  }
  return (
    <div className="relative w-full h-screen">
      {openBook ?
      <Book className=" absolute top-56 left-72" openBook={openBook} onClick={onClick}/> 
      :
      null
    }
      <NavBar />
      <div className="flex justify-center my-10">
        <span className="pb-4 px-8 border-0 border-b-2 border-[#E9F7FA] font-bold text-5xl">
          Charles Doe's Profile
        </span>
      </div>

      <div className="flex ">
        <div className="flex-1 px-2 flex justify-center">
          <img
            className="rounded-full w-72 h-72 object-cover"
            src={require("../assets/user.jpg")}
          ></img>
        </div>

        <div className="flex-1">
          <div className="py-3">
            <Input
              label="Name"
              type="text"
              placeholder="Name"
              value="nana"
              disabled="true"
              // onChange={handleChange("date")}
            />
          </div>

          {/* <div className="py-3">
            <Input
              label="Email"
              type="text"
              placeholder="Email"
              value="email"
              disabled="true"
              // onChange={handleChange("date")}
            />
          </div>

          <div className="py-3">
            <Input
              label="Age"
              type="text"
              placeholder="Age"
              value="age"
              disabled="true"
              // onChange={handleChange("date")}
            />
          </div>

          <div className="py-3">
            <Input
              label="Address"
              type="text"
              placeholder="Address"
              value="address"
              disabled="true"
              // onChange={handleChange("date")}
            />
          </div>

          <div className="py-3">
            <Input
              label="Phone"
              type="text"
              placeholder="Phone"
              value="phone"
              disabled="true"
              // onChange={handleChange("date")}
            />
          </div> */}

          <div className="py-3">
            <Input
              label="License Number"
              type="text"
              placeholder="License Number"
              value="License Number"
              disabled="true"
              // onChange={handleChange("date")}
            />
          </div>

          <div className="pl-56 ml-[6px]">
          <button className="btn btn-info right-0 relative " onClick={onClick}>Book appointment</button>
        </div>
        </div>

      </div>

      <div className="flex justify-center flex-col items-center mt-12">
        <div className="font-bold text-3xl pb-4 px-8 ">Schedule</div>
        <div className="">
          <CalendarCustom />
        </div>
      </div>
    </div>
  );
}
