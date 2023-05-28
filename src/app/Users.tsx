const User = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col my-10 border border-red-400 rounded-md p-20">
      <div className="text-lg font-bold">{name}</div>
    </div>
  );
};

export default async function Users() {
  const userRes = await fetch("http://localhost:3001/users/", {
    cache: "no-cache",
  });
  const users = await userRes.json();

  return (
    <div className="flex-1">
      <h1 className="text-xl font-bold">Users</h1>
      {users.map((user: any) => {
        return <User name={user.name} key={user.name} />;
      })}
    </div>
  );
}
