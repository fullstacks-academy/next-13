import { Header } from "@/components/Header";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header username="Dummy"></Header>
      <div className="px-10 py-10">{children}</div>
    </div>
  );
}
