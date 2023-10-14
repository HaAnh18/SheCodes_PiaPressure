import React from "react";

export function InputForm({ type, placeholder, value, onChange, pattern }) {
  return (
    <input
      className="form-control pr-3 bg-[#E9F7FA] pl-10 w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-[#4772fa] focus-within:text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
      pattern={pattern}
    />

    
  );
}
