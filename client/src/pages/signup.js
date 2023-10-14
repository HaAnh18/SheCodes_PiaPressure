import React, { useEffect, useState } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  InformationCircleIcon,
  HomeIcon,
  DevicePhoneMobileIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import { InputForm } from "../components/InputForm";
import { Validation } from "../functions/validation";
import * as axiosInstance from "../services/axiosService";

export default function Signup() {
  const [values, setValues] = useState({
    name: undefined,
    username: undefined,
    password: undefined,
    role: "Patient",
    age: undefined,
    address: undefined,
    recordId: undefined,
    license: undefined,
    phone: undefined,
  });

  const [message, setMessage] = useState(null);

  const {
    name,
    username,
    password,
    role,
    age,
    address,
    recordId,
    license,
    phone,
  } = values;
  const [errors, setErrors] = useState({
    name: "",
    username: "",
    password: "",
  });
  const handleChange = (name) => (e) => {
    const newValue = { ...values, [name]: e.target.value };
    setValues(newValue);
    setErrors(Validation(newValue));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    // console.log(username, password, name);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("password", password);
    if (
      errors.name === undefined &&
      errors.username === undefined &&
      errors.password === undefined &&
      errors.age === undefined &&
      errors.address === undefined &&
      errors.phone === undefined
    ) {
      if (role === "Patient") {
        if (errors.recordId === undefined) {
           await axiosInstance
        .signup(name, username, password, age, address, phone, role, recordId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          setMessage(err.response.data.message.error);
        });
        }
      } else {
        if (errors.license === undefined) {
           await axiosInstance
           .signup(name, username, password, age, address, phone, role, license)
           .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response.data.message.error);
          setMessage(err.response.data.message.error);
        });
        }
      }
  
    }
  };

  return (
    <div className="flex relative justify-center bg-gray-50">
      {message != null && (
        <div className="alert bg-red-100 border-red-400 w-[98%] absolute top-2 left-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 w-6 h-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{message}</span>
        </div>
      )}
      <div className="w-full flex items-center justify-center py-24">
        <div className="bg-white px-10 py-10 border-2 border-gray-100 w-[450px]">
          <h1 className="text-4xl font-semibold text-center">Sign up</h1>
          <form>
            <div className="mt-4">
              <div className="my-5 relative focus-within:text-[#4772fa] ease-in transition-all">
                <UserIcon className="w-5 h-5 absolute ml-3 mt-[10px] pointer-events-none" />
                <InputForm
                  key={1}
                  value={name}
                  onChange={handleChange("name")}
                  placeholder="Name"
                  required="true"
                  type="text"
                />
                {errors.name && (
                  <p className="mt-2  text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="my-5 relative focus-within:text-[#4772fa] ease-in transition-all">
                <EnvelopeIcon className="w-5 h-5 absolute ml-3 mt-[10px] pointer-events-none" />
                <InputForm
                  key={2}
                  value={username}
                  onChange={handleChange("username")}
                  placeholder="Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  type="email"
                  required
                />
                {errors.username && (
                  <p className="mt-2 text-sm text-red-500">{errors.username}</p>
                )}
              </div>

              <div className="my-5 relative focus-within:text-[#4772fa] ease-in transition-all">
                <LockClosedIcon className="w-5 h-5 absolute ml-3 mt-[10px] pointer-events-none" />
                <InputForm
                  key={3}
                  value={password}
                  onChange={handleChange("password")}
                  placeholder="Password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  required
                  type="password"
                />
                {errors.password && (
                  <p className="mt-2  text-sm text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="my-5 relative focus-within:text-[#4772fa] ease-in transition-all">
                <InformationCircleIcon className="w-5 h-5 absolute ml-3 mt-[10px] pointer-events-none" />
                <InputForm
                  key={4}
                  value={age}
                  onChange={handleChange("age")}
                  placeholder="Age"
                  required
                  type="number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
                {errors.age && (
                  <p className="mt-2  text-sm text-red-500">{errors.age}</p>
                )}
              </div>

              <div className="my-5 relative focus-within:text-[#4772fa] ease-in transition-all">
                <HomeIcon className="w-5 h-5 absolute ml-3 mt-[10px] pointer-events-none" />
                <InputForm
                  key={5}
                  value={address}
                  onChange={handleChange("address")}
                  placeholder="Address"
                  required
                  type="text"
                />
                {errors.address && (
                  <p className="mt-2  text-sm text-red-500">{errors.address}</p>
                )}
              </div>

              <div className="my-5 relative focus-within:text-[#4772fa] ease-in transition-all">
                <DevicePhoneMobileIcon className="w-5 h-5 absolute ml-3 mt-[10px] pointer-events-none" />
                <InputForm
                  key={6}
                  value={phone}
                  onChange={handleChange("phone")}
                  placeholder="Phone"
                  required
                  type="text"
                />
                {errors.phone && (
                  <p className="mt-2  text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div className="ease-in transition-all">
                <label className="pr-3">Role</label>
                <select
                  value={role}
                  onChange={handleChange("role")}
                  className="select select-primary w-[88%]"
                >
                  <option>Patient</option>
                  <option>Doctor</option>
                </select>
              </div>

              {role === "Patient" ? (
                <div className="my-5 relative focus-within:text-[#4772fa] ease-in transition-all">
                  <IdentificationIcon className="w-5 h-5 absolute ml-3 mt-[10px] pointer-events-none" />
                  <InputForm
                    key={7}
                    value={recordId}
                    onChange={handleChange("recordId")}
                    placeholder="Record ID"
                    required
                    type="text"
                  />
                  {errors.recordId && (
                    <p className="mt-2  text-sm text-red-500">
                      {errors.recordId}
                    </p>
                  )}
                </div>
              ) : (
                <div className="my-5 relative focus-within:text-[#4772fa] ease-in transition-all">
                  <IdentificationIcon className="w-5 h-5 absolute ml-3 mt-[10px] pointer-events-none" />
                  <InputForm
                    key={8}
                    value={license}
                    onChange={handleChange("license")}
                    placeholder="License Number"
                    required
                    type="text"
                  />
                  {errors.license && (
                    <p className="mt-2  text-sm text-red-500">
                      {errors.license}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-y-4 ">
              <button
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-[#4772fa] text-white text-lg font-bold"
                onClick={handleSubmit}
                onSubmit={handleSubmit}
              >
                Sign up
              </button>
              <p className="text-gray-400 text-xs">
                I agree to the Terms of Service and Privacy & Security Policy.
              </p>
            </div>
          </form>

          <div className="mt-8 flex justify-center items-center">
            <p className="text-base">Have an account already? </p>
            <button className="text-[#4772fa] text-base ml-2">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
