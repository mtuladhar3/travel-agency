import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar"; 
import Footer from "./components/footer/Footer";
import ScrollReset from "./components/ScrollReset";
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
        <ScrollReset />
        {/* The Navbar goes right above the main content children */}
        <Navbar />
        <main className="w-full overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}