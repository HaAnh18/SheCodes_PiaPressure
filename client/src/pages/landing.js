import React from "react";
import { Footer } from "../components/Footer";
import { NavBar2 } from "../components/NavBar2";

export default function Landing() {
  return (
    <div>
      <NavBar2 />
      <div>
        <img src={require("../assets/landing.png")}></img>
      </div>

      <div className="flex justify-center flex-col items-center mt-10 mb-28">
        <p className="px-8 font-bold text-4xl">Getting Started</p>

        <div className="flex">
          <div className="flex justify-center flex-col items-center px-10">
            <div>
              <img
                className="object-cover"
                src={require("../assets/b1.png")}
              ></img>
            </div>

            <p className="mt-6 text-xl">Find a psychatrist</p>
          </div>

          <div className="flex justify-center flex-col items-center px-10">
            <div>
              <img
                className="object-cover"
                src={require("../assets/b2.png")}
              ></img>
            </div>

            <p className="mt-6 text-xl">Book an appointment</p>
          </div>

          <div className="flex justify-center flex-col items-center px-10">
            <div>
              <img
                className="object-cover"
                src={require("../assets/b3.png")}
              ></img>
            </div>

            <p className="mt-6 text-xl">Share your story with the others</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center mt-10 mb-20">
        <p className="px-8 font-bold text-4xl">Take a self-assessment</p>

        <div class="flex w-11/12 h-fit p-10 bg-[#90DBE7] rounded-2xl mt-10">
          <div class="flex-none w-2/6">
            <p className="text-justify	">
              There are many symptoms of depression and anxiety. The more
              symptoms a person has, the more likely it is that he or she is
              depressed or anxious.
            </p>
            <p className="text-justify mt-3">
              This self-assessment will help you learn whether you have symptoms
              of depression and/or anxiety.
            </p>
          </div>
          <div class="flex-1 bg-[#E9F7FA] ml-8 p-4 rounded-2xl">
            <p className="font-bold text-lg pb-3">2 of 10</p>

            <p className="text-sm text-gray-500 pb-3">
              Over the last two weeks, how often have you been bothered by:
            </p>

            <p className="font-bold text-base ">
              Feeling down, depressed, or hopeless
            </p>

            <div className="flex justify-around m-3 pt-4">
              <button className="btn rounded-3xl bg-white border-[#007BFF] m-0 px-4 text-xs">
                Not at all
              </button>
              <button className="btn rounded-3xl bg-white border-[#007BFF] m-0 px-4 text-xs">
                Several days
              </button>
            </div>

            <div className="flex justify-around m-3">
              <button className="btn rounded-3xl bg-white border-[#007BFF] m-0 px-4 text-xs">
                More than half a day
              </button>
              <button className="btn rounded-3xl bg-white border-[#007BFF] m-0 px-4 text-xs">
                Nearly everyday
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center mb-28">
        <div className="pb-4">
          <img src={require('../assets/why.png')}></img>
        </div>

        <div className="w-11/12">
          <img src={require('../assets/reason.png')}></img>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
