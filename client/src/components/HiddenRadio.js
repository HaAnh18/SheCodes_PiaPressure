import React from "react";

export default function HiddenRadio({value, onChange}) {
  return (
    <ul className="flex">
      <li className="relative px-3">
      <input
        className="sr-only peer"
        type="radio"
        value={value[0]}
        name="answer"
        id="1"
        onChange={onChange}
      />
      <label
        className="bg-white flex p-3 border border-gray-300 rounded-3xl cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-[#4772fa] peer-checked:text-white peer-checked:ring-2 peer-checked:border-transparent"
        for="1"
      >
        {value[0]}
      </label>
    </li>

    <li className="relative px-3">
      <input
        className="sr-only peer"
        type="radio"
        value={value[1]}
        name="answer"
        id="2"
        onChange={onChange}
      />
      <label
        className="flex p-3 bg-white border border-gray-300 rounded-3xl cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-[#4772fa] peer-checked:text-white peer-checked:ring-2 peer-checked:border-transparent"
        for="2"
      >
        {value[1]}
      </label>
    </li>

    <li className="relative px-3">
      <input
        className="sr-only peer"
        type="radio"
        value={value[2]}
        name="answer"
        id="3"
        onChange={onChange}
      />
      <label
        className="flex p-3 bg-white border border-gray-300 rounded-3xl cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-[#4772fa] peer-checked:text-white peer-checked:ring-2 peer-checked:border-transparent"
        for="3"
      >
        {value[2]}
      </label>
    </li>
    </ul>

    
  );
}
