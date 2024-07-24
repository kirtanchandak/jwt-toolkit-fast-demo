"use client";
import { useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  const generateToken = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/jwt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, payload: { username }, ttl: 3600 }),
    });

    const data = await response.json();
    setToken(data.token);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <form action="" className="flex flex-col mt-12">
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="ID"
            className="border border-gray-500"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <button onClick={generateToken}>Login</button>
          {token && <div>Token: {token}</div>}
        </form>
      </div>
    </>
  );
}
