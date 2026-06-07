import Navbar from "./components/navbar/Navbar"; // Absolute import path
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* The Navbar goes right above the main content children */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}