import { useBreakpoints } from '../hooks/useBreakpoints';
import Container from './Container';

export default function Banner() {
  const { isMobile, isTablet } = useBreakpoints();

  const responsiveLabel = () => {
    if (isMobile) return 'w-[300px] h-[300px] top-30 left-17';
    if (isTablet) return 'w-[400px] h-[400px] top-20 left-90';
    return 'w-[600px] h-[600px] top-0 left-140';
  };

  const responsiveButton = () => {
    if (isMobile) return 'top-85 left-54';
    if (isTablet) return 'top-92 left-137';
    return 'top-105 left-210';
  };

  return (
    <div className="w-full h-[600px] bg-secondary relative">
      <img
        className="w-full h-full object-cover"
        src="../src/assets/images/banner.png"
        alt="banner"
      />
      <Container>
        <img
          className={`absolute  ${responsiveLabel()} object-cover`}
          src="../src/assets/images/laura-banner.png"
          alt="banner"
        />
        <a
          href="https://wa.me/5554991184768"
          target="_blank"
          className={`whitespace-nowrap apple-garamond body-large absolute ${responsiveButton()} -translate-x-1/2 -translate-y-1/2 border-2 !py-0 !px-10 text-secondary rounded-full`}
        >
          Entre em contato
        </a>
      </Container>
    </div>
  );
}
