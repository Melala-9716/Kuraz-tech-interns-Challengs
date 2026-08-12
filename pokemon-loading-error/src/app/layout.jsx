import "./globals.css";

export const metadata = {
  title: "Pokemon App",
  description: "Pokemon loading and error challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-purple-500">{children}</body>
    </html>
  );
}