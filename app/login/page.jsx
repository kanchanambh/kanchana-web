"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error == null) {
        router.push("/admin");
      } else {
        return new Response(JSON.stringify("Error occured while logging"), {
          status: 500,
        });
      }
    } catch (error) {
      return new Response(JSON.stringify(error.message), { status: 500 });
    }
  };

  const handleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl dark:text-white text-black pt-20">Login</h1>
      </div>
      <div className="flex items-center justify-center p-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[250px] space-y-6
           bg-slate-800 p-10 shadow-xl rounded-lg items-center
           justify-center"
        >
          <input
            className="bg-slate-700 border-[1px] border-solid border-slate-400 rounded-lg px-2 text-white"
            type="email"
            name="email"
            value={data.email}
            placeholder="Email..."
            onChange={handleInputChange}
          />
          <input
            className="bg-slate-700 border-[1px] border-solid border-slate-400 rounded-lg px-2 text-white"
            type="password"
            name="password"
            value={data.password}
            placeholder="Password..."
            onChange={handleInputChange}
          />
          <button className="bg-green-600 px-5 py-2 rounded-lg">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
