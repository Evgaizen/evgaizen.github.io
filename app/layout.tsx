import { Navbar } from "./components/Navbar";
import "./globals.css";

const LINKS = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Blog",
    url: "/blog",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <main className="flex flex-col justify-center items-center">
          <Navbar links={LINKS} avatar={<></>} />
          {children}
        </main>
      </body>
    </html>
  );
}
