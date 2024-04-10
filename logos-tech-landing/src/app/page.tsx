"use client";
import Image from "next/image";
import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Home() {
  const orientation = useBreakpointValue(
    { base: "horizontal", md: "vertical" },
    {
      fallback: "horizontal",
    }
  );
  return (
    <>
      <Center className="w-full relative text-white">
        <Center className="relative bg-logos-secondary-bg flex flex-col gap-2 w-full p-4 ">
          <Image
            src="/logos-white.png"
            alt="Logos Tech"
            width={500}
            height={50}
            className="z-10"
          />
        </Center>
      </Center>
      <section className="w-full relative text-white py-8 flex flex-col items-center bg-logos-primary-bg gap-4">
        <section className="w-full md:w-2/4 px-6 md:px-5 md:pb-10">
          <h1 className="text-md md:text-xl font-bold">Sobre nós:</h1>
          <p className="text-sm md:text-lg">
            A Logos Tech é uma empresa de assistência técnica especializada em
            manutenção e desenvolvimento de aplicações sob medida que vai além
            do suporte tradicional. Somos parceiros que se dedicam ao seu
            equipamento, oferecendo soluções completas e personalizadas para
            atender às suas necessidades específicas.
          </p>
        </section>
        <section className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-logos-secondary-bg md:p-6 p-3 rounded-md mx-4 box-content">
          <Box className="text-sm md:text-lg p-1 flex flex-col gap-2">
            <h1 className="text-md md:text-xl font-bold">
              Mais do que uma assistência:
            </h1>
            <UnorderedList>
              <ListItem>Manutenção preventiva e corretiva:</ListItem>
              <ListItem>Desenvolvimento de aplicações sob medida:</ListItem>
              <ListItem>Suporte técnico ágil e eficiente:</ListItem>
              <ListItem>Consultoria especializada:</ListItem>
            </UnorderedList>
          </Box>
          <Divider
            orientation={orientation as "horizontal" | "vertical"}
            className=""
          />
          <Box className="text-sm md:text-lg p-1 flex flex-col gap-2">
            <h1 className="text-md md:text-xl font-bold">
              Com a Logos tech você pode contar com:
            </h1>
            <UnorderedList>
              <ListItem>Manutenção preventiva e corretiva:</ListItem>
              <ListItem>Desenvolvimento de aplicações sob medida:</ListItem>
              <ListItem>Suporte técnico ágil e eficiente:</ListItem>
              <ListItem>Consultoria especializada:</ListItem>
            </UnorderedList>
          </Box>
        </section>
      </section>
    </>
  );
}
