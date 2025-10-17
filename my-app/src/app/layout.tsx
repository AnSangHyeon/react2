import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href={"/"}>홈</Link>&nbsp;|&nbsp;
          <Link href={"/test"}>Counter</Link>&nbsp;|&nbsp;
          <Link href={"/nextjs"}>nextjs</Link>&nbsp;|&nbsp;
          <Link href={"/routing"}>routing</Link>&nbsp;|&nbsp;
          <Link href={"/ssr-ssg"}>ssr-ssg</Link>&nbsp;|&nbsp;
          <Link href={"/dynamic-routes"}>dynamic-routes</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
