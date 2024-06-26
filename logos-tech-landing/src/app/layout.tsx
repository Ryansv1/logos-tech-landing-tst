import type { Metadata } from "next";
import "../../public/globals.css";
import { Poppins } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Logos Tech",
  description:
    "Mais que uma assistência técnica, uma parceira para seu equipamento.",
};
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.className}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <body className="flex flex-col min-h-screen min-w-screen relative font-poppins">
        <ChakraProvider>
          <NavBar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
