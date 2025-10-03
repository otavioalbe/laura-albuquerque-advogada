import Container from '../components/Container';
import videos from '../constants/useVideosConstants';
import type { VideoType } from '../types/VideoType';
import { useBreakpoints } from '../hooks/useBreakpoints';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
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
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
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
                modules={[Navigation, FreeMode]}
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
                navigation={{
                  nextEl: '.swiper-button-next-videos',
                  prevEl: '.swiper-button-prev-videos',
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
                {videos.map((video: VideoType, index: number) => (
                  <SwiperSlide key={index}>{renderVideoIframe(video, index)}</SwiperSlide>
                ))}
              </Swiper>

              {/* Setas de navegação customizadas */}
              <div className="swiper-button-prev-videos absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>

              <div className="swiper-button-next-videos absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
