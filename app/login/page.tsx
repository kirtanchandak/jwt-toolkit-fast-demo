"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function Login() {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const router = useRouter();

  useEffect(() => {
    setId(uuidv4());
  }, []);

  const options = {ttl: 120, iss: "noscrubs", aud: "users"}
  const generateToken = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, payload: { username }, options }),
    });
    
    if (response.status === 200) {
      router.push("/profile");
    }
  };

  return (
    <>
       <div className="bg-gray-800 flex flex-col lg:flex-row  h-full lg:h-screen p-3">
        <div className=" w-full lg:w-1/2 bg-grey-lighter flex rounded flex-col order-2 lg:order-1 bg-white">
          <div className="container w-full lg:w-4/6 mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded text-black w-full">
              <h1 className="mb-8 text-3xl text-center font-semibold">
                Welcome Back 🚀
              </h1>
              <div className="flex my-5 bg-gray-200 rounded-md p-3 items-center space-x-2">
                <input
                  className="outline-none w-full bg-transparent"
                  name="username"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <button
               onClick={generateToken}
                className="w-full font-medium flex justify-between p-3 items-center bg-gray-800 text-center py-3 rounded bg-green text-white hover:bg-primary-600 focus:outline-none my-1"
              >
                <h2>Login</h2>
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 order-1 flex items-center lg:order-2 justify-center">
          <img src="https://media.istockphoto.com/id/1323742842/photo/funny-cat-in-sunglasses-cat-with-glasses-on-a-light-blue-clean-sunny-background-funny-pets.jpg?s=612x612&w=0&k=20&c=lJP4Lh8ZzUO8o9NlYTVRDT91Hvcddm8T-FDxVlUkxwQ=" className="rounded-lg w-48 my-5 lg:w-80" alt="logo" />
        </div>
      </div>
    </>
  );
}
