import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import SessionProvider from "@/components/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Benson Yan Portfolio",
  description: "Bensons Portfolio",
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}


export default async function RootLayout({ children }) {

  const session = await getServerSession();
  console.log(session);

  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <SessionProvider>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
            <Header />
            <main id='skip-nav' className='mx-auto mb-16 max-w-5xl px-5 py-24 sm:px-8'>
              <div className="relative z-10">
                {children}
              </div>
              <Image
                width={1512}
                height={550}
                className='absolute left-1/2 top-0 z-0 -translate-x-1/2'
                src='/gradient-background-top.png'
                alt=''
                role='presentation'
                priority
              />
              <Image
                width={1512}
                height={447}
                className='absolute -bottom-6 left-1/2 z-0 -translate-x-1/2'
                src='/gradient-background-bottom.png'
                alt=''
                role='presentation'
                priority
              />
            </main>
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
