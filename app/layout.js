import Credit from "./components/Credit";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import "./globals.css";

export const metadata = {
  title: "Shop | Lssi",
  description: "Buy Lssi Publication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
        </div>
        {children}
        <Footer />
        <Credit />
      </body>
    </html>
  );
}
