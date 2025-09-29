import Container from './Container';
import videos from '../constants/useVideosConstants';
import type { VideoType } from '../types/VideoType';
import { useBreakpoints } from '../hooks/useBreakpoints';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function VideosSection() {
  const { isDesktop } = useBreakpoints();

  const renderVideoIframe = (video: VideoType, index: number) => (
    <iframe
      key={index}
      className="w-[300px] h-[533px] rounded-lg"
      src={video.videoPath}
      title={video.title}
      allow="encrypted-media; gyroscope;"
      allowFullScreen
    ></iframe>
  );

  return (
    <div className="bg-secondary w-full relative shadow-[inset_0_-50px_50px_-50px_rgba(0,0,0,0.3)]">
      <Container>
        <div className="!py-10">
          {isDesktop && (
            <div className="flex flex-row gap-x-4 justify-center">
              {videos.map((video: VideoType, index: number) => renderVideoIframe(video, index))}
            </div>
          )}

          {!isDesktop && (
            <div className="relative">
              <Swiper
                modules={[Pagination, FreeMode]}
                spaceBetween={16}
                slidesPerView={1}
                centeredSlides={true}
                grabCursor={true}
                simulateTouch={true}
                allowTouchMove={true}
                freeMode={{
                  enabled: false,
                  sticky: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                    spaceBetween: 20,
                  },
                }}
                className="w-full pb-12"
              >
                {videos.map((video: VideoType, index: number) => (
                  <SwiperSlide key={index}>{renderVideoIframe(video, index)}</SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
