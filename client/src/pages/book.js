import React, { useState } from "react";
import { Form } from "../components/Form";
import HiddenRadio from "../components/HiddenRadio";
import { Input } from "../components/Input";
import { InputForm } from "../components/InputForm";
import { XCircleIcon, ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Book() {
  const [values, setValues] = useState({
    date: "2023-10-15",
    time: "",
    note: "",
    diagnosis: "",
  });

  const { date, time, note, diagnosis } = values;
  // const [openBook, setOpenBook] = useState(true)
  const handleChange = (name) => (e) => {
    const newValues = { ...values, [name]: e.target.value };
    setValues(newValues);
    // console.log(date[date.length - 1]);
    // console.log(date);
    // console.log(newValues);
    // setErrors(ValidationSignin(newValues));
  };

  const oddDate = ["9:00", "12:00", "14:00"];
  const evenDate = ["10:00", "13:00", "15:00"];

  // let bookedDate = values?.date.split('-');
  // let day = bookedDate[bookedDate.length - 1];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setErrors(ValidationSignin(values));
    console.log(values);
  };

  // const onClick = async(e) => {
  //   e.preventDefault();
  //   setOpenBook(false)
  // }

  return (
    <div className="flex relative h-screen justify-center">
      <Link to={"/home"} className="absolute w-16 h-16 top-4 left-4">
        <ArrowLongLeftIcon />
      </Link>
      <div className="w-1/2">
        <img src={require("../assets/book.png")}></img>
      </div>
      <div className="bg-[#E9F7FA] px-10 py-10 border-2 border-gray-100 w-1/2 relative">
        <h1 className="text-4xl mt-0 font-semibold text-center">
          {" "}
          Book an appointment{" "}
        </h1>
        <p className="text-sm mt-2 text-center">Fill in the form below</p>
        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <Input
              label="Date"
              type="date"
              placeholder="Date"
              value={date}
              onChange={handleChange("date")}
            />
            {date[9] % 2 === 1 ? (
              <div className=" flex-col py-10">
                <span className="flex pb-5 items-center w-[80px]">Time</span>
                <HiddenRadio value={evenDate} onChange={handleChange("time")} />
              </div>
            ) : (
              <div className="flex py-10">
                <span className="flex pb-5 items-center w-[80px]">Time</span>
                <HiddenRadio value={oddDate} onChange={handleChange("time")} />
              </div>
            )}

            <div>
              <span className="flex pr-3 w-[90px] pb-4">Problem</span>
              <textarea
                value={note}
                onChange={handleChange("note")}
                className="outline-gray-200 w-full h-20 resize-none rounded-md"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-y-4">
            <button
              className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-[#4772fa] text-white text-lg font-bold"
              type="submit"
            >
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
