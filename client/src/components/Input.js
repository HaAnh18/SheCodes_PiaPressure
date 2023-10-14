import React from "react";

export function Input({ type,label, placeholder, value, onChange, disabled }) {
  return (
    <div className="flex">
      <label className="w-[90px] flex items-center pr-3">{label}</label>
          <input type={type} disabled={disabled} placeholder={placeholder} onChange={onChange} value={value} className="input input-bordered w-full max-w-xs focus:outline-white" />
      </div>
  )
}