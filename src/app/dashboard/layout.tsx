export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await fetch("http://localhost:3001", {
    next: { revalidate: 60 },
  });
  const firstName = (await res.json()).name;

  return (
    <div className="h-screen flex flex-row">
      <div className="w-1/4 bg-slate-300">{firstName}</div>
      {children}
    </div>
  );
}
