import type { Metadata } from "next";
import "../../public/globals.css";
import { Poppins } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

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
      <body className="flex flex-col min-h-screen relative font-poppins">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
