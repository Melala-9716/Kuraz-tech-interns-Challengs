import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CampusConnect",
  description: "A university student platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F7F9FC]">
        <header className="sticky top-0 z-50 bg-[#102A43] backdrop-blur-md">
          <div className="flex text-[20px] mx-[50px] my-[20px] gap-[300px] sticky">
              <h1 className="text-blue-700 text-italic font-bold text-[30px]">CAMPUSCONNECT</h1>
          <div className="ml-[300px] flex gap-[50px] pt-[6px]">
            <a className="hover:underline text-white hover:text-blue-800 transition-all duration-300 " href="/">Home</a>
            <a className="hover:underline text-white hover:text-blue-800 transition-all duration-300 " href="/components/event">Events</a>
            <a  className="hover:underline text-white hover:text-blue-800 transition-all duration-300 " href="/components/resource">Resources</a>
            <a className="hover:underline text-white hover:text-blue-800 transition-all duration-300 " href="/components/contact">Feedback</a>
            <button className="mt-[0px] h-[20px]">dark</button>
          </div>
          </div>
        
        </header>
        <main>
          {children}
        </main>
        <fotter className="text-center m-[30px] ">
          <h1 className="text-[#102A43]">CampusConnect                     © 2026    </h1>
          <div className="grid justify-center items-center grid-cols-[repeat(2,80px)] gap-[10px] ">
            <a className="hover:underline hover:text-blue-800 transition-all duration-300 " href="/">Home</a>
            <a className="hover:underline hover:text-blue-800 transition-all duration-300 " href="/components/event">Events</a>
            <a className="hover:underline hover:text-blue-800 transition-all duration-300 " href="/components/resource">Resources</a>
            <a className="hover:underline hover:text-blue-800 transition-all duration-300 " href="/components/contact">Feedback</a>
          </div>
       
             
        </fotter>
      </body>
    </html>
  );
}