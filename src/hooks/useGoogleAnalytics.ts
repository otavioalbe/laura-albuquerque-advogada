// Hook para rastreamento de eventos do Google Analytics
export const useGoogleAnalytics = () => {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    // Verifica se o gtag está disponível (Google Analytics carregado)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    } else {
      console.warn('Google Analytics (gtag) não está disponível');
    }
  };

  // Função específica para rastrear cliques no WhatsApp
  const trackWhatsAppClick = (source: string) => {
    trackEvent('click', 'contact', `whatsapp_${source}`);
  };

  // Função específica para rastrear cliques em telefone
  const trackPhoneClick = (source: string) => {
    trackEvent('click', 'contact', `phone_${source}`);
  };

  // Função específica para rastrear cliques em email
  const trackEmailClick = (source: string) => {
    trackEvent('click', 'contact', `email_${source}`);
  };

  // Função específica para rastrear cliques em redes sociais
  const trackSocialClick = (platform: string, source: string) => {
    trackEvent('click', 'social', `${platform}_${source}`);
  };

  return {
    trackEvent,
    trackWhatsAppClick,
    trackPhoneClick,
    trackEmailClick,
    trackSocialClick,
  };
};
