import Navbar from "./components/navbar/Navbar"; 
import "./globals.css";

export default function RootLayout({ children }) {
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