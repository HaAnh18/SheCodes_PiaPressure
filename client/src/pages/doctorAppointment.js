import React from "react";
import { SideBar } from "../components/SideBar";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon, TagIcon } from "@heroicons/react/24/solid";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export default function DoctorAppointment() {
  return (
    <div className="flex">
      <SideBar />

      <div className="h-screen flex-1 p-7">
        <div className="flex justify-center flex-col items-center mt-10 mb-10">
          <p className="px-8 font-bold text-4xl">Appointments</p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col bg-[#CBB2EC] w-[180px] p-4 rounded-3xl mx-8">
            <div className="bg-[#7686DA] w-fit rounded-full p-2 my-2">
              <ChartBarSquareIcon className="h-6 w-6 text-white" />
            </div>

            <p className="font-bold text-xl py-2">300</p>
            <p className="text-gray-500 pb-2">Total Appointments</p>
            <p className="text-xs text-[#007BFF]">+8% from yesterday</p>
          </div>

          <div className="flex flex-col bg-[#FFF4DE] w-[180px] p-4 rounded-3xl mx-8">
            <div className="bg-[#FF947A] w-fit rounded-full p-2 my-2">
              <DocumentTextIcon className="h-6 w-6 text-white" />
            </div>

            <p className="font-bold text-xl py-2">36</p>
            <p className="text-gray-500 pb-2">Total Patient</p>
            <p className="text-xs text-[#007BFF]">+5% from yesterday</p>
          </div>

          <div className="flex flex-col bg-green-100 w-[180px] p-4 rounded-3xl mx-8">
            <div className="bg-green-500 w-fit rounded-full p-2 my-2">
              <TagIcon className="h-6 w-6 text-white" />
            </div>

            <p className="font-bold text-xl py-2">5</p>
            <p className="text-gray-500 pb-2">Total Appointments</p>
            <p className="text-xs text-[#007BFF]">+1,2% from yesterday</p>
          </div>
        </div>

        <div className="overflow-x-auto my-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>MentCom</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Charles Doe</td>
                <td>10/10/2023</td>
                <td>8:00</td>
                <td className="text-red-500 ">Now</td>
                <td className="flex">
                  <Link to={"/doctor/appointmentdetail"}>
                    <div className="bg-gray-200 w-fit px-4 py-1 rounded-3xl mr-2">
                      View
                    </div>
                  </Link>
                  <div className="bg-[#6699CF] w-fit px-4 py-1 rounded-3xl ">
                    Join
                  </div>
                </td>
              </tr>

              <tr>
                <td>Charles Doe</td>
                <td>10/10/2023</td>
                <td>8:00</td>
                <td className="text-blue-500 ">Incoming</td>
                <td className="flex">
                  <div className="bg-gray-200 w-fit px-4 py-1 rounded-3xl mr-2">
                    View
                  </div>
                  <div className="bg-[#E9F7FA] w-fit px-4 py-1 rounded-3xl ">
                    Cancel
                  </div>
                </td>
              </tr>

              <tr>
                <td>Charles Doe</td>
                <td>10/10/2023</td>
                <td>8:00</td>
                <td className="text-blue-500 ">Incoming</td>
                <td className="flex">
                  <div className="bg-gray-200 w-fit px-4 py-1 rounded-3xl mr-2">
                    View
                  </div>
                  <div className="bg-[#E9F7FA] w-fit px-4 py-1 rounded-3xl ">
                    Cancel
                  </div>

                  {/* <button className=''>View</button> */}
                  {/* <button className=''>Join</button> */}
                </td>
              </tr>

              <tr>
                <td>Charles Doe</td>
                <td>10/10/2023</td>
                <td>8:00</td>
                <td className="text-blue-500 ">Incoming</td>
                <td className="flex">
                  <div className="bg-gray-200 w-fit px-4 py-1 rounded-3xl mr-2">
                    View
                  </div>
                  <div className="bg-[#E9F7FA] w-fit px-4 py-1 rounded-3xl ">
                    Cancel
                  </div>

                  {/* <button className=''>View</button> */}
                  {/* <button className=''>Join</button> */}
                </td>
              </tr>

              <tr>
                <td>Charles Doe</td>
                <td>10/10/2023</td>
                <td>8:00</td>
                <td className="text-gray-500 ">Completed</td>
                <td className="flex">
                  <div className="bg-gray-200 w-fit px-4 py-1 rounded-3xl mr-2">
                    View
                  </div>
                  {/* <button className=''>View</button> */}
                  {/* <button className=''>Join</button> */}
                </td>
              </tr>

              <tr>
                <td>Charles Doe</td>
                <td>10/10/2023</td>
                <td>8:00</td>
                <td className="text-gray-500 ">Completed</td>
                <td className="flex">
                  <div className="bg-gray-200 w-fit px-4 py-1 rounded-3xl mr-2">
                    View
                  </div>
                  {/* <button className=''>View</button> */}
                  {/* <button className=''>Join</button> */}
                </td>
              </tr>

              <tr>
                <td>Charles Doe</td>
                <td>10/10/2023</td>
                <td>8:00</td>
                <td className="text-gray-500 ">Completed</td>
                <td className="flex">
                  <div className="bg-gray-200 w-fit px-4 py-1 rounded-3xl mr-2">
                    View
                  </div>
                  {/* <button className=''>View</button> */}
                  {/* <button className=''>Join</button> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
