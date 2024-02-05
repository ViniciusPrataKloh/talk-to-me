import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Container from "./components/container";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talk to Me!",
  description: "Talk to Me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={rubik.className + "min-h-screen bg-gradient-to-tr from-black to-zinc-900 text-white"}>
        <Header />

        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
