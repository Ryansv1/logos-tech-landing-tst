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
import Link from "next/link";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section className="bg-logos-primary-bg w-screen px-8 flex flex-row justify-between items-center relative z-20 ">
      <Link href="/">
        <Image
          src="/logos-white.png"
          alt="Logos Tech"
          width={100}
          height={100}
        />
      </Link>
      <Button maxBlockSize={"sm"} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="text-sm">Menu</DrawerHeader>
          <DrawerBody className="flex flex-col gap-4 text-sm">
            <Button>
              <Link href="/">Sobre nós</Link>
            </Button>
            <Button>
              <Link href="/servicos">Serviços</Link>
            </Button>
            <Button>
              <Link href="/contato">Contato</Link>
            </Button>
          </DrawerBody>
          <DrawerFooter className="text-sm">LogosTech ®2024</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
