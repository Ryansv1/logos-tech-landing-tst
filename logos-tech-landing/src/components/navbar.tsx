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

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container className="bg-logos-primary-bg container-sm flex flex-row justify-around items-center">
      <Image src="/logos-white.png" alt="Logos Tech" width={100} height={100} />
      <Button onClick={onOpen}>Open</Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <p>Drawer Body</p>
          </DrawerBody>
          <DrawerFooter className="text-sm">LogosTech ®2024</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
}
