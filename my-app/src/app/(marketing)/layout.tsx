export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>marketing header</header>
        {children}
        <footer>marketing footer</footer>
      </body>
    </html>
  );
}
