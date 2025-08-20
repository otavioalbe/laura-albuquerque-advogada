import { useBreakpoints } from '../hooks/useBreakpoints';

function Header() {
  const { isMobile } = useBreakpoints();

  return (
    <div className="w-full bg-primary h-[120px] flex items-center justify-center !px-4">
      <div className="flex items-center justify-between w-full !max-w-[328px] md:!max-w-full xl:!max-w-[1318px]">
        <div className="flex items-center self-start">
          <img
            src="../src/assets/images/logo.webp"
            alt="logo"
            className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] xl:w-[500px] xl:h-[500px] !ml-[-40px] md:!ml-[-90px]"
          />
        </div>
        {!isMobile && (
          <div className="absolute right-0 flex items-center justify-center gap-x-5 md:!pr-4">
            <h1 className="!text-secondary bevenida !text-xl">Página Inicial</h1>
            <h1 className="!text-secondary bevenida !text-xl">Sobre</h1>
            <h1 className="!text-secondary bevenida !text-xl">Áreas de atuação</h1>
            <h1 className="!text-secondary bevenida !text-xl">Contato</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
