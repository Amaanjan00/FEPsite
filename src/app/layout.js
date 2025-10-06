import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-red-50`}>

        <header className="flex flex-col gap-2 justify-center items-center pt-10 mx-12">
          <Header />
        </header>

        <main>{children}</main>

        <footer><Footer /></footer>

      </body>
    </html>
  );
}
