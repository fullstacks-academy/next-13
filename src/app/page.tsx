"use client";
import { Input } from "@/components/Input";
import Link from "next/link";
import Posts from "./Posts";
import Users from "./Users";
import { Suspense } from "react";
import { notFound } from "next/navigation";

const CatFact = ({ text, createdAt }: { text: string; createdAt: Date }) => {
  return (
    <div className="flex flex-col my-10 border border-blue-400 p-20">
      <div>{text}</div>
      <div>{createdAt.toISOString()}</div>
    </div>
  );
};

export default async function Home() {
  return (
    <div>
      <h1>Hello From Next 13</h1>
      <button
        onClick={() => {
          notFound();
        }}
      >
        Go to not found
      </button>
      <div className="flex gap-5">
        <div className="flex-1">
          {/* @ts-expect-error Server component */}
          <Posts />
        </div>
        <div className="flex-1">
          <Suspense fallback={<>Users are loading...</>}>
            {/* @ts-expect-error Server component */}
            <Users />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
