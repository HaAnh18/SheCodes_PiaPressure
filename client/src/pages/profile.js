import React, { useState } from "react";
import { Form } from "../components/Form";
import HiddenRadio from "../components/HiddenRadio";
import { Input } from "../components/Input";
import { InputForm } from "../components/InputForm";
import { XCircleIcon, UserIcon, CakeIcon, HomeIcon } from "@heroicons/react/24/solid";
// import Book from "./book";
import { NavBar } from "../components/NavBar";
import { CalendarCustom } from "../components/Calendar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export default function Profile() {
  const [openBook, setOpenBook] = useState(true);
  const onClick = async (e) => {
    e.preventDefault();
    if (openBook) {
      setOpenBook(false);
    } else {
      setOpenBook(true);
    }
  };
  return (
    <div className="relative w-full h-screen">
      {/* {openBook ?
      <Book className=" absolute top-56 left-72" openBook={openBook} onClick={onClick}/> 
      :
      null
    } */}
      <NavBar />
      <div className="flex p-16">
        <div className="flex-none w-1/5 flex items-center justify-center">
          <img
            className="rounded-full h-28 w-28 object-cover "
            src={require("../assets/doctor.png")}
          ></img>
        </div>

        <div className="flex justify-center flex-col ">
          <p className="pt-2 font-semibold ">Dr. Charles Deo</p>
          <p className="text-sm text-gray-400">Psychologist</p>
          <div className="mt-10">
            <button className="btn bg-white hover:bg-[#6699CF] hover:text-white border-[#6699CF] text-[#6699CF]">
              <Link to={'/book'}>Book a meeting</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="flex px-16">
        <div className="flex-1 ">
          <div className="flex flex-col pb-4">
            <p className="font-semibold text-[#96D1FF] py-3">Experience</p>
            <ul className="list-disc pl-3 text-xs">
              <li>License Type: Licensed Professional Counselor (LPC)</li>
              <li>License Number: A123456LPC</li>
              <li>
                Years of Experience: 12 Languages Spoken: English, Spanish
              </li>
              <li>Languages Spoken: English, Spanish</li>
            </ul>
          </div>

          <div className="flex flex-col pb-4">
            <p className="font-semibold text-[#96D1FF] py-3">Specialization</p>
            <ul className="list-disc pl-3 text-xs">
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Trauma and PTSD</li>
              <li>Adolescents and Young Adults</li>
              <li>Stress Management</li>
            </ul>
          </div>

          <div className="flex flex-col pb-4">
            <p className="font-semibold text-[#96D1FF] py-3">About</p>
            <div className="flex">
              <div className="flex justify-center items-center">
                <UserIcon className="h-8 w-8 text-[#96D1FF] pr-3" />
              </div>

              <div className="flex justify-center items-center">
                <span className="text-xs">Male</span>
              </div>
            </div>


            <div className="flex">
              <div className="flex justify-center items-center">
                <CakeIcon className="h-8 w-8 text-[#96D1FF] pr-3" />
              </div>

              <div className="flex justify-center items-center">
                <span className="text-xs">Born June 26, 1980</span>
              </div>
            </div>


            <div className="flex">
              <div className="flex justify-center items-center">
                <HomeIcon className="h-8 w-8 text-[#96D1FF] pr-3" />
              </div>

              <div className="flex justify-center items-center">
                <span className="text-xs">Ho Chi Minh City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img src={require("../assets/review.JPG")}></img>
        </div>
      </div>


      <div className="flex justify-center flex-col items-center mt-12 mb-10">
        <div className="font-bold text-3xl pb-4 px-8 ">Schedule</div>
        <div className="">
          <CalendarCustom />
        </div>
      </div>

      <Footer/>
    </div>
  );
}
