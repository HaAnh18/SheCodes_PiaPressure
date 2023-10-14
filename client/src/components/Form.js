import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export function Form({ onChange, values }) {
  return (
    <div>
      <h1>Book appointment</h1>
      <form>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={values.date}
            onChange={onChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="flex ">
          <label>Time</label>
          <ul className="flex">
            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="yes"
                name="answer"
                id="answer_yes"
                onChange={onChange}
              />
              <label
                className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
                for="answer_yes"
              >
                Yes
              </label>
            </li>

           <li className="relative">
           <input className="sr-only peer" type="radio" value="no" name="answer" id="answer_no" onChange={onChange}/>
    <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-500 peer-checked:ring-2 peer-checked:border-transparent" for="answer_no">No</label>

           </li>
          </ul>
        </div>
      </form>
    </div>
  );
}
