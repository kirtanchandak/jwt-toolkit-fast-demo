"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  payload: any;
  username: string;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await axios.get<{ user: User }>("/api/profile");
      setUser(response.data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Error loading user data, please login!</p>;
  }

  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <div className="max-w-screen-xl px-4 mx-auto flex flex-col gap-10 pt-24">
        <p className="text-3xl font-extrabold">Profile Page</p>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
              alt="Profile"
              className="aspect-square w-28 object-cover rounded-full"
            />
            <div className="mt-6">
              <p className="text-lg font-bold">@{user?.payload?.username}</p>
              <p>id: {user?.payload?.id}</p>
            </div>
          </div>
          <div>
            <button className="mt-8 bg-gray-300 px-5 py-2 rounded-lg text-black font-bold">
              Edit profile
            </button>
          </div>
        </div>
        <a href="/" className="mt-8 bg-gray-300 px-5 py-2 rounded-lg text-black font-bold text-center">
          Back to home page
        </a>
      </div>
    </div>
  );
}
