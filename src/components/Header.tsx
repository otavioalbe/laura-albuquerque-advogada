import { useBreakpoints } from '../hooks/useBreakpoints';
import Hamburguer from './Hamburguer';

function Header() {
  const { isMobile } = useBreakpoints();

  return (
    <div className="w-full bg-primary h-[120px] flex items-center justify-center !px-4 relative">
      <div className="flex items-center justify-between w-full !max-w-[328px] md:!max-w-full xl:!max-w-[1318px] relative">
        <div className="flex items-center flex-shrink-0">
          <img
            src="../src/assets/images/logo.webp"
            alt="logo"
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] xl:w-[450px] xl:h-[450px] !ml-[-55px] md:!ml-[-50px] xl:!ml-[-75px]"
          />
        </div>
        {!isMobile && (
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
        {isMobile && <Hamburguer />}
      </div>
    </div>
  );
}

export default Header;
