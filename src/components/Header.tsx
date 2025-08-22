import { useState } from 'react';
import { useBreakpoints } from '../hooks/useBreakpoints';
import Hamburguer from './Hamburguer';

function Header() {
  const { isMobile, isTablet } = useBreakpoints();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-primary h-[120px] flex items-center justify-center !px-4 relative">
      <div className="flex items-center justify-between w-full !max-w-[328px] md:!max-w-full xl:!max-w-[1318px] relative">
        <div className="flex items-center flex-shrink-0">
          <img
            src="../src/assets/images/logo.webp"
            alt="logo"
            className="w-[350px] h-[300px] md:w-[400px] md:h-[350px] xl:w-[500px] xl:h-[450px] !ml-[-65px] md:!ml-[-50px] xl:!ml-[-62px]"
          />
        </div>
        {!isMobile && !isTablet && (
          <div className="flex items-center md:gap-x-3 xl:gap-x-5 flex-shrink-0 !pr-4">
            <h1 className="!text-secondary apple-garamond md:!text-2xl whitespace-nowrap">
              Página Inicial
            </h1>
            <h1 className="!text-secondary apple-garamond md:!text-2xl whitespace-nowrap">Sobre</h1>
            <h1 className="!text-secondary apple-garamond md:!text-2xl whitespace-nowrap">
              Áreas de atuação
            </h1>
            <h1 className="!text-secondary apple-garamond md:!text-2xl whitespace-nowrap">
              Contato
            </h1>
          </div>
        )}
        {(isMobile || isTablet) && <Hamburguer isOpen={isMenuOpen} setOpen={setIsMenuOpen} />}
      </div>

      {(isMobile || isTablet) && (
        <div
          className={`z-10 absolute top-full left-0 right-0 bg-primary !pb-4 h-[180px] flex flex-col items-center justify-center w-full transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-y-4">
            <h1 className="!text-secondary apple-garamond !text-xl">Página Inicial</h1>
            <h1 className="!text-secondary apple-garamond !text-xl">Sobre</h1>
            <h1 className="!text-secondary apple-garamond !text-xl">Áreas de atuação</h1>
            <h1 className="!text-secondary apple-garamond !text-xl">Contato</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
