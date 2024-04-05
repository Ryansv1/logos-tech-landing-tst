import NavBar from "@/components/navbar";
import Image from "next/image";
import {
  Box,
  Center,
  Container,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export default function Home() {
  const breakpoint = 568;

  return (
    <>
      <NavBar />
      <Center className="container-sm relative text-white">
        <Center className="relative bg-logos-secondary-bg flex flex-col gap-2">
          <Image
            src="/logos-white.png"
            alt="Logos Tech"
            width={500}
            height={50}
            className="w-2/4 p-2 z-10"
          />
          <div className="h-36 w-full bg-gradient-to-t from-logos-primary-bg from-50% via-black via-10% to-white to-90% border-white border-t-4 rounded-t-full"></div>
        </Center>
      </Center>
      <Container className="container-sm relative text-white py-8 flex flex-col items-center bg-logos-primary-bg gap-4">
        <Container className="">
          <h1 className="text-md font-bold">Sobre nós:</h1>
          <p className="text-sm">
            A Logos Tech é uma empresa de assistência técnica especializada em
            manutenção e desenvolvimento de aplicações sob medida que vai além
            do suporte tradicional. Somos parceiros que se dedicam ao seu
            equipamento, oferecendo soluções completas e personalizadas para
            atender às suas necessidades específicas.
          </p>
        </Container>
        <Container className="container-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Box className="text-sm p-1 flex flex-col gap-2">
            <h1 className="text-md font-bold">Mais do que uma assistência:</h1>
            <UnorderedList>
              <ListItem>Manutenção preventiva e corretiva:</ListItem>
              <ListItem>Desenvolvimento de aplicações sob medida:</ListItem>
              <ListItem>Suporte técnico ágil e eficiente:</ListItem>
              <ListItem>Consultoria especializada:</ListItem>
            </UnorderedList>
          </Box>
          <Box className="text-sm p-1 flex flex-col gap-2">
            <h1 className="text-md font-bold">
              Com a Logos tech você pode contar com:
            </h1>
            <UnorderedList>
              <ListItem>Manutenção preventiva e corretiva:</ListItem>
              <ListItem>Desenvolvimento de aplicações sob medida:</ListItem>
              <ListItem>Suporte técnico ágil e eficiente:</ListItem>
              <ListItem>Consultoria especializada:</ListItem>
            </UnorderedList>
          </Box>
        </Container>
      </Container>
    </>
  );
}
