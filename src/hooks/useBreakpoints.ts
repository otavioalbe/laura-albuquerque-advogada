import { useMediaQuery } from 'react-responsive';

export const useBreakpoints = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1365 });
  const isDesktop = useMediaQuery({ minWidth: 1366 });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};
