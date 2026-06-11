import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar"; 
import Footer from "./components/footer/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} overflow-x-clip`}>
        {/* The Navbar goes right above the main content children */}
        <Navbar />
        <main className="overflow-x-clip w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}