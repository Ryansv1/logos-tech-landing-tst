import Image from "next/image";
import * as React from "react";

export default function Servicos() {
  return (
    <section className="relative h-screen w-screen bg-logos-secondary-bg text-white flex flex-col">
      <section className="flex flex-row items-center justify-around relative bg-contain bg-left-bottom bg-servicos-processador">
        <div className="py-24 px-2 bg-gradient-to-b from-logos-primary-bg to bg-logos-secondary-bg relative left-28 break-all">
          <h1 className="text-sm font-bold text-right">
            Realizamos diversos <br></br> serviços
          </h1>
        </div>
      </section>
    </section>
  );
}
