import { useState } from 'react';
import Hamburger from 'hamburger-react';

export default function Hamburguer() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative">
      <Hamburger color="var(--color-secondary)" toggled={isOpen} toggle={setOpen} size={24} />

      <div
        className={`fixed top-30 bg-primary !pb-4 h-[180px] flex flex-col items-center justify-center w-full left-0 right-0 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-y-4 !w-[328px]">
          <h1 className="!text-secondary apple-garamond !text-xl">Página Inicial</h1>
          <h1 className="!text-secondary apple-garamond !text-xl">Sobre</h1>
          <h1 className="!text-secondary apple-garamond !text-xl">Áreas de atuação</h1>
          <h1 className="!text-secondary apple-garamond !text-xl">Contato</h1>
        </div>
      </div>
    </div>
  );
}
