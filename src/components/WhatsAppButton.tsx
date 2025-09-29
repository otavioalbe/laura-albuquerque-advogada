import { useBreakpoints } from '../hooks/useBreakpoints';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

function WhatsAppButton() {
  const { isMobile, isDesktop } = useBreakpoints();
  const { trackWhatsAppClick } = useGoogleAnalytics();

  const handleWhatsAppClick = () => {
    const phoneNumber = '5554991184768';
    const message = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre os serviços jurídicos da Dra. Laura Albuquerque. Poderia me ajudar?'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    trackWhatsAppClick('whatsapp_button');
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 cursor-pointer group" onClick={handleWhatsAppClick}>
      <div className="bg-green-500 hover:bg-green-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 flex items-center justify-center group-hover:animate-pulse">
        <div className={`${isMobile ? 'w-14 h-14' : 'w-16 h-16'} flex items-center justify-center`}>
          <img
            src="./assets/icons/whatsapp.svg"
            alt="WhatsApp"
            className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} filter brightness-0 invert`}
          />
        </div>
      </div>

      <div
        className={`${isDesktop ? 'absolute' : 'hidden'} bottom-full right-0 !py-2 !px-4 !bg-primary !text-white text-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${isMobile ? '!py-1 !px-3' : ''}`}
      >
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
      </div>
    </div>
  );
}

export default WhatsAppButton;
