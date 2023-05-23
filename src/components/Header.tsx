"use client";
import Link from "next/link";
import { useState } from "react";

export const Header = ({ username }: { username: string }) => {
  const [count, setCount] = useState(0);

  const inc = () => setCount((c) => c + 1);

  return (
    <div>
      <h1 className="text-xl font-bold my-5 mx-10">Hello {username}</h1>
      <button onClick={inc}>Inc</button>
      <Link href="/dashboard">Dashboard</Link>
      <hr />
    </div>
  );
};
