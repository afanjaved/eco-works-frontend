import "./globals.css";
import { Open_Sans } from 'next/font/google';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

// Import Open Sans font with the desired weights
const openSans = Open_Sans({
  subsets: ['latin'],    // Use 'latin' subset for standard characters
  weight: ['400', '600', '700'],  // Choose the font weights you need (Regular, Semi-Bold, Bold)
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={openSans.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
