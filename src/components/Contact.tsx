import Container from './Container';
import { useState, useEffect } from 'react';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

export default function Contact() {
  const [isMapLoading, setIsMapLoading] = useState(true);
  const { trackWhatsAppClick, trackEmailClick, trackSocialClick } = useGoogleAnalytics();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMapLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const message = encodeURIComponent(
    'Olá! Gostaria de saber mais sobre os serviços jurídicos da Dra. Laura Albuquerque. Poderia me ajudar?'
  );

  return (
    <div id="contact" className="bg-primary w-full">
      <Container>
        <div className="!py-10 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col xl:w-[612px] md:self-start self-center items-center md:items-start text-center md:text-left">
            <h1 className="!text-secondary apple-garamond header-1 text-shadow">Contato</h1>
            <div className="flex flex-col md:!mt-9 !mt-6">
              <p className="!text-secondary body-large text-shadow">Laura Albuquerque | Advogada</p>
              <p className="!text-secondary body-regular">Direito de Família e Sucessões</p>
            </div>
            <div className="flex flex-col md:!mt-9 !mt-6">
              <p className="!text-secondary body-large text-shadow">Entre em contato conosco</p>
              <p className="!text-secondary body-regular">
                Tel:{' '}
                <a
                  href={`https://wa.me/5554991184768?text=${message}`}
                  target="_blank"
                  className="!text-secondary body-regular hover:underline"
                  onClick={() => trackWhatsAppClick('contact_phone_link')}
                >
                  (54) 99118-4768
                </a>
              </p>
              <p className="!text-secondary body-regular">
                E-mail:{' '}
                <a
                  href="mailto:lauradcalbuquerque@outlook.com"
                  target="_blank"
                  className="!text-secondary body-regular hover:underline"
                  onClick={() => trackEmailClick('contact_email_link')}
                >
                  lauradcalbuquerque@outlook.com
                </a>
              </p>
            </div>
            <div className="flex flex-col md:!mt-9 !mt-6">
              <p className="!text-secondary body-large text-shadow">Endereço</p>
              <a
                href="https://maps.app.goo.gl/C8cbiuHihciCnt9r7"
                target="_blank"
                className="max-w-[280px] !text-secondary body-regular hover:underline"
              >
                Rua Minas Gerais, 344e, Sala 04,
                <br />
                Centro Chapecó/SC, CEP 89801-021
              </a>
            </div>
          </div>
          <div className="xl:w-full md:w-[300px] xl:h-[410px] md:h-[360px] h-[400px] md:!mt-0 !mt-10 relative">
            {isMapLoading && (
              <div className="absolute inset-0 bg-gray-200 !rounded-xl flex items-center justify-center">
                <p className="text-gray-500 body-regular">Carregando mapa...</p>
              </div>
            )}
            <iframe
              src="https://www.google.com/maps/d/u/2/embed?mid=1rEOWoIBUdD8Z6qicn5VQGPXtgrVq8-0&ehbc=2E312F"
              loading="lazy"
              allowFullScreen={true}
              className="w-full h-full !rounded-xl"
              onLoad={() => setIsMapLoading(false)}
              style={{ opacity: isMapLoading ? 0 : 1 }}
            ></iframe>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4 xl:!mt-5 !mt-2 !mb-8">
          <a
            href={`https://wa.me/5554991184768?text=${message}`}
            target="_blank"
            className="hover:scale-110 transition-all duration-300"
            onClick={() => trackWhatsAppClick('contact_social_icon')}
          >
            <img src="./assets/icons/whatsapp.svg" alt="WhatsApp" className="w-12 h-12" />
          </a>
          <a
            href="https://www.instagram.com/lauradcalbuquerque/"
            target="_blank"
            className="hover:scale-110 transition-all duration-300"
            onClick={() => trackSocialClick('instagram', 'contact_social_icon')}
          >
            <img src="./assets/icons/instagram.svg" alt="Instagram" className="w-12 h-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/laura-albuquerque/"
            target="_blank"
            className="hover:scale-110 transition-all duration-300"
            onClick={() => trackSocialClick('linkedin', 'contact_social_icon')}
          >
            <img src="./assets/icons/linkedin.svg" alt="LinkedIn" className="w-12 h-12" />
          </a>
        </div>
      </Container>
    </div>
  );
}
