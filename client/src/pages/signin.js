import React, { useEffect, useState } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { InputForm } from "../components/ui/InputForm";
import { ValidationSignin } from "../functions/validationSignin";
import * as axiosInstance from "../services/axiosService";

export default function Signin() {
  const [message, setMessage] = useState(null);
  const [values, setValues] = useState({
    username: undefined,
    password: undefined,
    role: "Patient"
  });

  const { username, password, role } = values;
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleChange = (name) => (e) => {
    const newValues = { ...values, [name]: e.target.value }
    setValues(newValues);
    setErrors(ValidationSignin(newValues));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrors(ValidationSignin(values));
    if (
      errors.username === undefined &&
      errors.password === undefined
    ) {
      // console.log(values);
      await axiosInstance.signin("username", username, password)
      .then((res) => {
        console.log(res.data.token);
      })
      .catch((err) => {
        // console.log(err);
        setMessage(err.response.data.message.error);
      })
    } 
  };



  return (
    <div className="flex relative justify-center w-full h-screen bg-gray-50">
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
      <div className="w-full flex items-center justify-center">
        <div className="bg-white px-10 py-10 border-2 border-gray-100 w-[450px]">
          <h1 className="text-4xl font-semibold text-center">Sign in</h1>
          <form>
            <div className="mt-4">
              <div className="my-5 relative focus-within:text-[#4772fa] ease-in transition-all">
                <EnvelopeIcon className="w-5 h-5 absolute ml-3 mt-[10px] pointer-events-none" />
                <InputForm
                  key={1}
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
                  required
                  type="password"
                />
                {errors.password && (
                  <p className="mt-2  text-sm text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>
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

            <div className="mt-8 flex flex-col gap-y-4 ">
              <button
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-[#4772fa] text-white text-lg font-bold"
                onClick={handleSubmit}
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>

          <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-gray-300"></div>
            <span class="flex-shrink mx-4 text-gray-300 text-sm">
              Sign in with
            </span>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="mt-4 flex justify-center items-center">
            <button className="text-[#4772fa] text-base ml-2">
              Sign Up for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
