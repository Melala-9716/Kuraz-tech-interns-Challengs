import "./globals.css";

export const metadata = {
  title: "Guest Senior Webinar",
  description: "Webinar session",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>

        <header>
          <h1>
            Guest Senior Session
          </h1>

          <nav>
            <a href="/">
              Home
            </a>

            <a href="/speakers">
              Speakers
            </a>

            <a href="/schedule">
              Schedule
            </a>
          </nav>
        </header>


        <main>
          {children}
        </main>


        <footer>
          <p>
            © 2026 Webinar Platform
          </p>
        </footer>


      </body>

    </html>
  );
}