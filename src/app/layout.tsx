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
      <body>{children}</body>
    </html>
  );
}
