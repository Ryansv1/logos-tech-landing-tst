import Image from "next/image";
import * as React from "react";

export default function Servicos() {
  return (
    <section className="relative h-screen w-screen bg-logos-secondary-bg text-white flex flex-col">
      <section
        className="bg-fixed flex flex-row items-center justify-around relative space-x-6 bg-image"
        style={{
          backgroundImage: `url('/servicos-procesador.jpg')`,
        }}
      >
        <h1 className="text-md font-bold p-4">Realizamos diversos serviços</h1>
      </section>
    </section>
  );
}
