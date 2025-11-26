import Link from "next/link";
import ThemeProvider from "./components/theme-provider";
import ThemeStatus from "./components/theme-status";
import '@/app/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider> 
      <html lang="en">
          <body>
            <header>
              <h1 className="text-2xl font-bold p-4 bg-gray-200">My Website Header</h1>
              <Link href={"/blog4"} className="mr-4 text-blue-500">blog4</Link>&nbsp; | &nbsp;
              <Link href={"/blog2"} className="mr-4 text-blue-500">blog2</Link>&nbsp; | &nbsp;
              <Link href={"/blog"} className="mr-4 text-blue-500">blog</Link>&nbsp; | &nbsp;
              <Link href={"/carousel"} className="mr-4 text-blue-500">carousel</Link>&nbsp; | &nbsp;
              <Link href={"/artist"} className="mr-4 text-blue-500">artist</Link>&nbsp; | &nbsp;
              <Link href={"/nextImage"} className="mr-4 text-blue-500">nextImage && 구글폰트</Link>&nbsp; | &nbsp;
              <ThemeStatus />
            </header>
            {children}
          </body>
      </html>
    </ThemeProvider>
  );
}
