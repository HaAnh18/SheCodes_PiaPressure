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
        <ProfileCard status="Online" name="Dr. Charles Deo"/>
        <ProfileCard status="Away" name="Dr. Sao Mai"/>
        <ProfileCard status="Away" name="Dr. Thanh Nguyen"/>
        <ProfileCard status="Online" name="Dr. John Wick"/>
        <ProfileCard status="Online" name="Dr. Quang Tran"/>
        <ProfileCard status="Online" name="Dr. My Dieu"/>
        <ProfileCard status="Online" name="Dr. John Wick"/>
        <ProfileCard status="Online" name="Dr. Quang Tran"/>
        <ProfileCard status="Online" name="Dr. My Dieu"/>
      </div>

      <Footer/>
    </div>
  );
}
