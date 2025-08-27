import { useBreakpoints } from '../hooks/useBreakpoints';
import Container from './Container';

export default function Banner() {
  const { isMobile, isTablet } = useBreakpoints();

  const responsiveLabel = () => {
    if (isMobile) return 'w-[360px] h-[120px] !ml-[8px] !mt-[-300px]';
    if (isTablet) return 'w-[450px] h-[150px] !ml-[140px] !mt-[-300px]';
    return 'w-[600px] h-[200px] !ml-[400px] !mt-[-400px]';
  };

  const responsiveButton = () => {
    if (isMobile) return '!ml-[70px]';
    if (isTablet) return '!ml-[250px]';
    return '!ml-[570px]';
  };

  return (
    <div className="grid grid-cols-1 grid-rows-1 w-full h-[500px] xl:h-[600px] relative">
      {isMobile ? (
        <img
          src="./assets/images/banner.png"
          alt="banner"
          className="!z-0 col-start-1 row-start-1 object-cover h-[500px] xl:h-[600px] w-full"
        />
      ) : (
        <div
          className="!z-0 col-start-1 row-start-1 h-[500px] xl:h-[600px] w-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("./assets/images/banner.png")',
          }}
        />
      )}
      <Container>
        <div className="z-10 flex !w-full">
          <div className="self-center">
            <img
              src="./assets/images/laura-label.png"
              alt="banner"
              className={`${responsiveLabel()} !mb-3`}
            />
            <a
              href="https://wa.me/5554991184768"
              target="_blank"
              className={`${responsiveButton()} button-hover whitespace-nowrap apple-garamond body-large border-2 !py-1 !px-10 text-secondary rounded-full`}
            >
              {' '}
              Entre em contato{' '}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
