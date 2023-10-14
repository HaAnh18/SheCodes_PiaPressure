import React, { useState } from "react";
import { Form } from "./Form";
import HiddenRadio from "./HiddenRadio";
import { Input } from "./Input";
import { InputForm } from "./InputForm";
import {XCircleIcon} from '@heroicons/react/24/outline'

export default function Book({openBook, onClick, className}) {
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

  console.log(openBook === true)

  return (
    <div className={className}>
      <div className="bg-white px-10 py-10 border-2 border-gray-100 w-[450px] relative">
      <XCircleIcon className="w-7 h-7 absolute right-5 top-3" onClick={onClick}/>
      <h1 className="text-4xl mt-0 font-semibold text-center">Book an appointment</h1>
      <form>
        <div className="mt-5">
        <Input
          label="Date"
          type="date"
          placeholder="Date"
          value={date}
          onChange={handleChange("date")}
        />
        {date[9] % 2 === 1 ? (
          <div className="flex py-4">
            <span className="flex items-center w-[80px]">Time</span>
            <HiddenRadio value={evenDate} onChange={handleChange("time")} />
          </div>
        ) : (
          <div className="flex py-4">
            <span className="flex items-center w-[80px]">Time</span>
            <HiddenRadio value={oddDate} onChange={handleChange("time")} />
          </div>
        )}

        <div className="flex">
          <span className="flex pr-3 w-[90px]">Problem</span>
          <textarea
            value={note}
            onChange={handleChange("note")}
            class="outline-gray-200 w-full max-w-xs resize-none rounded-md"
          ></textarea>
        </div>
        </div>

        <div className="mt-8 flex flex-col gap-y-4 ">
              <button
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-[#4772fa] text-white text-lg font-bold"
                onClick={handleSubmit}
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
