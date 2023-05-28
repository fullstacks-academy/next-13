"use client";
import Link from "next/link";
import { useState } from "react";
import { User } from '../app/User';

export const Header = ({ username }: { username: string }) => {
  const [count, setCount] = useState(0);

  const inc = () => setCount((c) => c + 1);

  return (
    <div>
      <User />
      <h1 className="text-xl font-bold my-5 mx-10">Hello {username}</h1>
      <button className="border border-red-400 mx-10" onClick={inc}>
        Clicked {count}
      </button>
      <div className="flex gap-5 py-4 px-10">
        <Link className="text-slate-500" href="/">
          Home
        </Link>
        <Link className="text-slate-500" href="/dashboard">
          Dashboard
        </Link>
      </div>
      <hr />
    </div>
  );
};
