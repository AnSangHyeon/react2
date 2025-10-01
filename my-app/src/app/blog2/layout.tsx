export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>== blog header ==</header>
      {children}
      <footer>== blog footer ==</footer>
    </>
  );
}
