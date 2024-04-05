import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../public/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logos Tech",
  description:
    "Mais que uma assistência técnica, uma parceira para seu equipamento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="flex flex-col min-h-screen relative">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
