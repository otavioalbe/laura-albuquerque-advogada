import Container from '../components/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { feedbacks, overallRating, totalReviews } from '../constants/useFeedbacksConstants';
import type { FeedbackType } from '../types/FeedbackType';
import { useRef, useState, useEffect } from 'react';
import { relativeTime } from '../utils/relativeTime';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps?sca_esv=a0464d9551b247bc&rlz=1C5OZZY_enBR1135BR1136&output=search&q=laura+albuquerque+advogada&source=lnms&fbs=ADc_l-acAb_3MMOAUx0zmbUpgBqRiigBgL2I_pgQa-94zvB053XGJ8j52MAaeNcXRIAnvVdv2hS-xutuztQCtwyJHLDxbLDw-MJwqMgNpw82MEaIIcBZ-iztTPlmkWNFdRk4qM0sWrGD5XjafzxSxxKXyJS2pkQZKeH_w461lXFaniM1nY8BNQMr0qqrxaesDIoyTZIweMwISHCDFwU9a8-h05tl-6E53w&entry=mc&ved=1t:200715&ictx=111';

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const cls = size === 'lg' ? 'w-6 h-6' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${cls} ${i < rating ? 'text-[#FBBC04]' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg
      className="w-4 h-4 text-[#1a73e8] flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="Perfil verificado"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z" />
    </svg>
  );
}

function TruncatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      setIsTruncated(el.scrollHeight > el.clientHeight);
    }
  }, [text]);

  return (
    <div className="flex flex-col gap-1 flex-1">
      <p ref={ref} className="text-gray-700 text-sm leading-relaxed line-clamp-4">
        {text}
      </p>
      {isTruncated && (
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="!text-[#1a73e8] text-sm font-medium hover:underline w-fit"
        >
          Leia mais
        </a>
      )}
    </div>
  );
}

function FeedbackCard({ feedback }: { feedback: FeedbackType }) {
  const initial = feedback.profileInitial ?? feedback.name.charAt(0).toUpperCase();

  return (
    <div className="bg-white rounded-2xl !p-5 shadow-sm border border-gray-100 flex flex-col gap-3 h-full">
      {/* Header: avatar + nome + data */}
      <div className="flex items-start gap-3">
        {/* Avatar com badge do Google */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#8B6914] flex items-center justify-center overflow-hidden">
            {feedback.photoUrl ? (
              <img
                src={feedback.photoUrl}
                alt={feedback.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `<span class="text-white font-semibold text-base">${initial}</span>`;
                  }
                }}
              />
            ) : (
              <span className="text-white font-semibold text-base">{initial}</span>
            )}
          </div>
          {/* Ícone G sobreposto no canto inferior esquerdo do avatar */}
          <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
            <GoogleIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Nome + data */}
        <div className="flex flex-col min-w-0 pt-0.5">
          <div className="flex items-center gap-1">
            <span className="font-bold text-gray-900 text-sm leading-tight truncate">
              {feedback.name}
            </span>
            <VerifiedBadge />
          </div>
          <span className="text-gray-500 text-xs mt-0.5">{relativeTime(feedback.date)}</span>
        </div>
      </div>

      {/* Estrelas maiores */}
      <StarRating rating={feedback.rating} size="lg" />

      {/* Texto truncado + "Leia mais" condicional */}
      <TruncatedText text={feedback.text} />
    </div>
  );
}

export default function Feedbacks() {
  return (
    <div className="bg-secondary w-full relative shadow-[inset_0_0_50px_rgba(0,0,0,0.3)]">
      <Container>
        <div className="flex flex-col items-center justify-center !my-10">
          <h1 className="apple-garamond xl:!text-6xl !text-4xl !mb-2">Avaliações</h1>

          {/* Resumo geral */}
          <div className="flex flex-col items-center justify-center !pt-5 !pb-10">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-8 group"
              aria-label="Ver todas as avaliações no Google Maps"
            >
              <GoogleIcon />
              <StarRating rating={Math.round(overallRating)} />
              <span className="text-white/90 text-sm font-medium">
                {overallRating.toFixed(1)} · {totalReviews} avaliações
              </span>
            </a>
          </div>
          {/* Carousel */}
          <div className="w-full">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              centeredSlides={false}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="w-full !pb-10"
            >
              {feedbacks.map((feedback, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <FeedbackCard feedback={feedback} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}
