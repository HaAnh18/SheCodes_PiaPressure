import React, { useState } from "react";
import { Form } from "../components/Form";
import HiddenRadio from "../components/HiddenRadio";
import { Input } from "../components/Input";
import { InputForm } from "../components/InputForm";
import { XCircleIcon } from "@heroicons/react/24/outline";
// import Book from "./book";
import { NavBar } from "../components/NavBar";
import { ProfileCard } from "../components/ProfileCard";
import { Footer } from "../components/Footer";

export default function Home() {
  // const [openBook, setOpenBook] = useState(true);
  // const onClick = async(e) => {
  //   e.preventDefault();
  //   console.log('test')
  //   setOpenBook(false)
  // }
  const [send, setSend] = useState(false)
  const sendFeedback = async(e) => {
      e.preventDefault();
      console.log(send);
      setSend(true)
    }

  return (
    <div className=" relative w-full h-screen">
      <NavBar />
      <div>
        <img src={require("../assets/home.png")}></img>
      </div>

      <div className="flex justify-center flex-col items-center mt-10 mb-10">
        <p className="px-8 font-bold text-4xl">Available Mentcom</p>
      </div>

      <div className="grid grid-cols-3 gap-10 px-10">
        <ProfileCard status="Online" />
        <ProfileCard status="Away" />
        <ProfileCard status="Away" />
      </div>

      <div className="flex justify-center flex-col items-center mt-10 mb-10">
        <p className="px-8 font-bold text-4xl">Tips & Resources</p>
      </div>

      <div className="flex justify-center ">
        <div class="flex  w-11/12 h-fit p-10 bg-[#6699CF] rounded-2xl ">
          <div class="flex-1">
            <div className="flex bg-[#E9F7FA] rounded-xl">
              <div className="flex-none w-2/6">
                <img
                  className="rounded-xl"
                  src={require("../assets/tip1.png")}
                ></img>
              </div>
              <div className="pt-2 pl-4">
                <p className="font-semibold text-lg">
                  Don’t let burnout sabotage your team{" "}
                </p>
                <p className="pt-2 text-sm">By Dr.Charles Doe</p>
              </div>
            </div>

            <div className="flex bg-[#E9F7FA] rounded-xl mt-14">
              <div className="flex-none w-2/6">
                <img
                  className="rounded-xl"
                  src={require("../assets/tip2.png")}
                ></img>
              </div>
              <div className="pt-2 pl-4">
                <p className="font-semibold text-lg">
                  Support your children with mental health skills{" "}
                </p>
                <p className="pt-2 text-sm">By Dr. Anna Felipe</p>
              </div>
            </div>
          </div>
          <div class="flex-none w-2/6 bg-[#E9F7FA] ml-8 rounded-2xl pb-3">
            <div>
              <img
                className="rounded-xl h-10/12"
                src={require("../assets/tip3.png")}
              ></img>
            </div>
            <div className="pt-2 pl-4">
              <p className="font-semibold text-lg">
                Blended approach to emotional learning{" "}
              </p>
              <p className="pt-2 text-sm">By Dr. Dallas Cameron</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center mt-10 mb-10">
        <p className="px-8 font-bold text-4xl">Share your experience with us</p>
      </div>

      <div className="flex justify-center relative pb-10">
      {send === true ?
      <div className="alert alert-success absolute top-2 right-[50px] w-[350px]">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Thank you for your sharing!</span>
    </div>
    :
    null}
        <div class="flex flex-col  w-11/12 h-fit p-10 bg-[#E9F7FA] rounded-2xl ">
          <div className="flex">
            <label className="pr-28 flex items-center">Your name</label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full max-w-sm focus:outline-white"
            />
          </div>

          <div className="mt-8">
            <label className="pr-10">Rate your experience</label>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>

          <div className="flex mt-8">
              <span className="flex w-[190px] pb-4">Anything that can be improved</span>
              <textarea
                // value=''
                // onChange={handleChange("note")}
                className="outline-gray-200 w-full h-20 max-w-sm resize-none rounded-md"
              />
              <div className="flex justify-center items-end pl-10 ">
              <button className="btn hover:bg-[#6699CF]  bg-[#6699CF] rounded-2xl text-white" onClick={sendFeedback}>Send</button>
              </div>
            </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
