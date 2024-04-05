"use client";
import Image from "next/image";
import * as React from "react";
import {
  Container,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container className="bg-logos-primary-bg container-sm flex flex-row justify-between items-center relative z-20">
      <Image src="/logos-white.png" alt="Logos Tech" width={100} height={100} />
      <Button maxBlockSize={"sm"} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="text-sm">Menu</DrawerHeader>
          <DrawerBody className="flex flex-col gap-4 text-sm">
            <Button>Sobre nós</Button>
            <Button>Serviços</Button>
            <Button>Contato</Button>
          </DrawerBody>
          <DrawerFooter className="text-sm">LogosTech ®2024</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
}
