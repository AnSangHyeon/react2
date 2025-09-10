export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>shop header</header>
        {children}
        <footer>shop footer</footer>
      </body>
    </html>
  );
}
