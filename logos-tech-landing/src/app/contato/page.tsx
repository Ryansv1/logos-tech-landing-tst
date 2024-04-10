import { Container, Center, VStack, Button } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import * as React from "react";

export default function Contato() {
  return (
    <section className="flex flex-col relative h-full w-screen bg-logos-secondary-bg md:text-xl items-center">
      <Center className="flex flex-col text-center relative top-1/4 text-white">
        <h1 className="text-md font-bold pb-4">Contato</h1>
        <p>Você pode nos encontrar através dos seguintes meios!</p>
      </Center>
      <div className="flex flex-col md:w-1/6 relative top-1/4 pt-6 md:mt-10 space-y-3">
        <Button className="gap-2 px-8">
          <FaWhatsapp size={24} />
          <Link href="">Nosso WhatsApp</Link>
        </Button>
        <Button className="gap-2">
          <FaInstagram size={24} />
          <Link href="">Nosso instagram</Link>
        </Button>
        <Button className="gap-2">
          <IoIosMail size={24} />
          <Link href="">Nosso email</Link>
        </Button>
      </div>
    </section>
  );
}
