import { Suspense } from "react";
import Posts from "./Posts";
import { User, preloadUser } from "./User";
import Users from "./Users";

export default async function Home() {
  return (
    <div>
      <h1>Hello From Next 13</h1>
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
