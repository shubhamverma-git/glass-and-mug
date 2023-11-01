import Header from "@/components/header/header";
import "./globals.scss";
import Footer from "@/components/Footer/Footer";
import localFont from "@next/font/local";

const myFont = localFont({
  src: "../assets/font/Megafield-Bold.otf",
  display: "block",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}