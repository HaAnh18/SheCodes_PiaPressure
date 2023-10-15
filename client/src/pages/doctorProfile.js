import React from "react";
import { SideBar } from "../components/SideBar";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon, TagIcon } from "@heroicons/react/24/solid";
import { Footer } from "../components/Footer";
import {
  XCircleIcon,
  UserIcon,
  CakeIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function DoctorProfile() {
  return (
    <div className="flex">
      <SideBar />

      <div className="h-screen flex-1">
        <div className="flex">
          <div className="flex-1 flex justify-around p-16">
            <div className="flex-none w-1/5 flex items-center justify-center">
              <img
                className="rounded-full h-28 w-28 object-cover "
                src={require("../assets/user.jpg")}
              ></img>
            </div>

            <div className="flex justify-center flex-col ">
              <p className="pt-2 font-semibold ">Dr. Nguyen Linh</p>
              <p className="text-sm text-gray-400">Psychologist</p>
              <div className="mt-10">
                <button className="btn bg-black hover:bg-white hover:border-black hover:text-black text-white">
                  <Link to={""}>Edit</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-none w-2/5 flex-col pb-4 flex justify-center">
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

        <div className="flex px-16">
          {/* <div className="flex-1 "> */}
            <div className="flex flex-col pb-4 pr-10">
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
              <p className="font-semibold text-[#96D1FF] py-3">
                Specialization
              </p>
              <ul className="list-disc pl-3 text-xs">
                <li>Cognitive Behavioral Therapy (CBT)</li>
                <li>Trauma and PTSD</li>
                <li>Adolescents and Young Adults</li>
                <li>Stress Management</li>
              </ul>
            {/* </div> */}
          </div>

          {/* <div className="flex-1">
            <img src={require("../assets/review.JPG")}></img>
          </div> */}
        </div>
      </div>
    </div>
  );
}
