import "./globals.css";

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

<GlobalErrorBoundary>
  <RootLayout>
    <RootTemplate>
      <RootErrorBoundary fallback={<Error />}>
        <RootSuspense fallback={<Loading />}>
          <RootPage />

/ -> /dashboard
<RootLayout>
  <RootTemplate>
    <RootErrorBoundary fallback={<Error />}>
      <RootSuspense fallback={<Loading />}>
        <DashboardLayout>
          <DashboardErrorBoundary fallback={<Error />}>
            <DashboardSuspense fallback={<Loading />}>
              <DashboardPage />
*/
