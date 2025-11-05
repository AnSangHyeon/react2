import Link from "next/link";
import ThemeProvider from "./components/theme-provider";
import ThemeStatus from "./components/theme-status";
import '@/app/globals.css'

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
              <Link href={"/blog2"}>blog2</Link>&nbsp; | &nbsp;
              <Link href={"/blog"}>blog</Link>&nbsp; | &nbsp;
              <Link href={"/carousel"}>carousel</Link>&nbsp; | &nbsp;
              <ThemeStatus />
            </header>
            {children}
          </body>
      </html>
    </ThemeProvider>
  );
}
