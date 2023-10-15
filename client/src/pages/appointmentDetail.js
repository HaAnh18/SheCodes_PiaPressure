import React from "react";
import { SideBar } from "../components/SideBar";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon, TagIcon } from "@heroicons/react/24/solid";
import { Footer } from "../components/Footer";

export default function AppointmentDetail() {
  return (
    <div className="flex">
      <SideBar />

      <div className="h-screen flex-1 p-7">
        <div className="flex justify-center flex-col mt-10 mb-10">
          <p className="px-8 font-bold text-4xl">Appointment Detail</p>
        </div>

        <div className="flex">
          <div className="flex-1 flex">
            <p className="pr-6">Appointment ID</p>
            <p className="">#APM091032845965</p>
          </div>

          <div className="flex-1 flex">
            <p className="pr-6">Patient</p>
            <p>Ashlynn Botosh</p>
          </div>
        </div>

        <div className="flex mt-8">
          <div className="flex-1 flex">
            <p className="pr-[100px]">Date</p>
            <p className="">14/10/2023</p>
          </div>

          <div className="flex-1 flex">
            <p className="pr-10">Time</p>
            <p>14:00 </p>
          </div>
        </div>

        <div className="flex mt-8">
          <div className="flex-1 flex">
            <p className="pr-[90px]">Status</p>
            <p className="">Completed</p>
          </div>
        </div>

        <div className="flex mt-8 flex-col">
            <p className="pr-[90px] mb-4">Meeting summary</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet.
            </p>
        </div>

        <div className="flex mt-8 flex-col">
            <p className="pr-[90px] mb-4">Note</p>
            <textarea
                // value=''
                // onChange={handleChange("note")}
                className="outline-gray-200 w-full h-20 resize-none rounded-md"
                value="You need to communicate with your children more"
              />
        </div>

        <div className="mt-8 flex justify-center">
          <button className="btn btn-info mx-4">Request information</button>
          <button className="btn bg-[#6699CF] mx-4 text-white">Send</button>
        </div>
      </div>
    </div>
  );
}
