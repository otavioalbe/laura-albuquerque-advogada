import { useDifferencesConstants } from '../constants/useDifferencesConstants';
import { useBreakpoints } from '../hooks/useBreakpoints';
import Container from './Container';
import DifferenceCard from './DifferenceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Differences() {
  const differences = useDifferencesConstants();
  const { isDesktop } = useBreakpoints();

  return (
    <div className="!pb-15">
      <Container>
        <div className="flex !py-10 justify-center">
          <h1 className="header-1 apple-garamond !text-secondary text-center text-shadow title-with-lines">
            DIFERENCIAIS
          </h1>
        </div>

        {isDesktop && (
          <div className="flex flex-row gap-4">
            {differences.map((difference, index) => (
              <DifferenceCard
                key={index}
                title={difference.title}
                description={difference.description}
                icon={difference.icon}
              />
            ))}
          </div>
        )}

        {!isDesktop && (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 20,
              },
            }}
            className="w-full"
          >
            {differences.map((difference, index) => (
              <SwiperSlide key={index}>
                <DifferenceCard
                  title={difference.title}
                  description={difference.description}
                  icon={difference.icon}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </div>
  );
}
