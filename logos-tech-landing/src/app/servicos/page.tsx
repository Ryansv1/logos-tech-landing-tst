"use client";
import * as React from "react";
import { motion, useInView } from "framer-motion";

export default function Servicos() {
  const ref = React.useRef(null);
  const containerRef = React.useRef(null);
  const isContainerInView = useInView(containerRef);

  return (
    <section className="relative items-center bg-logos-secondary-bg flex-1 text-white flex flex-col">
      <motion.section className="min-h-3/4 w-full justify-around bg-[center_bottom] bg-no-repeat relative bg-servicos-processador">
        <motion.div className="bg-gradient-to-b from-logos-primary-bg to bg-logos-secondary-bg absolute p-6 inset-x-0 w-56 md:w-2/4 mt-6 h-32">
          <h1 className="text-sm md:text-2xl font-bold text-left mr-4 md:mt-4 relative">
            Realizamos diversos serviços, entre em contato conosco!
          </h1>
        </motion.div>
      </motion.section>
      <motion.section className="bg-servicos-dev relative w-full min-h-2/4 bg-[center] bg-cover">
        <div className="bg-gradient-to-t  from-logos-primary-bg absolute inset-y-0 inset-x-0  p-10   ">
          <h1 className="text-sm md:text-2xl font-bold text-right mt-72">
            Desenvolvimento de aplicações web sob medida
          </h1>
        </div>
      </motion.section>
      <motion.section
        ref={containerRef}
        className="bg-servicos-manutencao min-h-2/4 w-full relative bg-[center] bg-cover"
      >
        <motion.div className="bg-gradient-to-b from-logos-primary-bg absolute inset-x-0 left-0 w-full p-10">
          <motion.h1 className="text-sm md:text-2xl font-bold text-center">
            Manutenção preventiva e corretiva
          </motion.h1>
        </motion.div>
      </motion.section>
      <motion.section className="bg-servicos-montagem min-h-2/4 w-full relative bg-[center] bg-cover">
        <div className="bg-gradient-to-l from-logos-primary-bg absolute inset-y-0 w-56 md:w-4/12 right-0 p-10">
          <h1 className="text-sm md:text-2xl font-bold text-center">
            Montagem e upgrade de computadores
          </h1>
        </div>
      </motion.section>
      <motion.section
        animate={{}}
        ref={ref}
        className="bg-servicos-gamer min-h-2/4 w-full relative bg-[center] bg-cover"
      >
        <div className="bg-gradient-to-b from-logos-primary-bg absolute inset-x-0 left-0 w-full p-10">
          <h1 className="text-sm  md:text-2xl font-bold text-center">
            Consultoria de upgrade para Gamers
          </h1>
        </div>
      </motion.section>
    </section>
  );
}
