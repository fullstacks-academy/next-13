import { Input } from "@/components/Input";
import Link from "next/link";

const CatFact = ({ text, createdAt }: { text: string; createdAt: Date }) => {
  return (
    <div className="flex flex-col my-10 border border-blue-400 p-20">
      <div>{text}</div>
      <div>{createdAt.toISOString()}</div>
    </div>
  );
};

export default async function Home() {
  const res = await fetch("https://cat-fact.herokuapp.com/facts/");
  const catFacts = await res.json();

  return (
    <div>
      <h1>Hello From Next 13</h1>
      {catFacts.map((fact: any) => {
        return <CatFact
          createdAt={new Date(fact.createdAt)}
          text={fact.text}
          key={fact._id}
        />;
      })}
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
