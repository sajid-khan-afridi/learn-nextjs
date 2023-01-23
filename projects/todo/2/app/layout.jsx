import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <h1 style={{ margin: "auto 0px" }}>Add todo App</h1>
        {children}
      </body>
    </html>
  );
}
