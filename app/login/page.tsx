"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function Login() {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Generate a unique ID when the component mounts
    setId(uuidv4());
  }, []);

  const generateToken = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, payload: { username }, ttl: 3600 }),
    });

    const data = await response.json();
    setToken(data.token);

    // Redirect to profile page upon successful login
    if (data.token) {
      router.push("/profile");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <form onSubmit={generateToken} className="flex flex-col mt-12">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="border border-gray-500"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
