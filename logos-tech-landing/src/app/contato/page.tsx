import { Container, Center, VStack, Button } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import * as React from "react";

export default function Contato() {
  return (
    <Container className="flex flex-col relative h-full bg-logos-secondary-bg">
      <Center className="flex flex-col text-center relative top-1/4 text-white">
        <h1 className="text-md font-bold pb-4">Contato</h1>
        <p>Você pode nos encontrar através dos seguintes meios!</p>
      </Center>
      <VStack className="flex flex-col relative top-1/4 pt-6 space-y-2">
        <Button className="gap-2">
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
      </VStack>
    </Container>
  );
}
