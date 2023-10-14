import React from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { ProfileCard } from "../components/ProfileCard";

export default function Find() {
  return (
    <div>
      <NavBar/>
      <div className="mt-10">
        <p className="text-center text-3xl font-semibold ">Find your MentCom</p>
      </div>
      <div className="grid grid-cols-3 gap-10 p-10">
        <ProfileCard status="Online" />
        <ProfileCard status="Away" />
        <ProfileCard status="Away" />
        <ProfileCard status="Online" />
        <ProfileCard status="Away" />
        <ProfileCard status="Away" />
      </div>

      <Footer/>
    </div>
  );
}
