import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/container";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Benson Yan Portfolio",
  description: "Bensons Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <body className={`${inter.className} bg-zinc-100 text-zinc-900
                      min-h-screen`}>
              <Container>
              <Header />
                {children}
              <Footer />
              </Container>
            </body>
    </html>
  );
}
