import "./globals.css";
import NavBar from "./components/nav-bar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
