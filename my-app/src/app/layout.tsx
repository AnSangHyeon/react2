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
              <ThemeStatus />
            </header>
            {children}
          </body>
      </html>
    </ThemeProvider>
  );
}
