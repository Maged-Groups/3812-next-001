import { Cairo } from "next/font/google";
import TopNavbar from "@/components/TopNavbar";
import "./globals.css";
import Extras from "@/components/Extras";

const cairoMain = Cairo({
  variable: "--font-cairo-main",
  subsets: ["arabic", "latin", "latin-ext"],
  weight: ["200", "400", "600", "800"],
});

export const metadata = {
  title: "3812 Next App",
  description: "This is our first NextJS Project",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      className={`${cairoMain.variable} h-full antialiased bg-amber-400 border`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <TopNavbar />

        {children}

        <Extras />
      </body>
    </html>
  );
}
