import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>== header ==</header>
        <nav>
          <Link href="/">home</Link> | 
          <Link href="/blog">blog</Link> | 
          <Link href="/blog2">blog2</Link> | 
          <Link href="/blog3">blog3</Link> |
          <Link href="/product">product</Link>
        </nav>
        {children}
        <footer>== footer ==</footer>
      </body>
    </html>
  );
}
