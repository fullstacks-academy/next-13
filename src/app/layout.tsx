import { Header } from "@/components/Header";
import "./globals.css";
import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>FullstacksJS</title>
      </head>
      <body>
        <div>Layout</div>
        <hr />
        {children}
      </body>
    </html>
  );
}

/*
/

<RootLayout>
  <RootTemplate>
    <RootSuspense fallback={<Loading />}>
      <RootPage />
    </RootSuspense>
  </RootTemplate>
</RootLayout>

/ -> /dashboard
<RootLayout>
  <RootTemplate>
    <RootSuspense fallback={<Loading />}>
      <DashboardLayout>
        <DashboardSuspense fallback={<Loading />}>
          <DashboardPage />
*/
