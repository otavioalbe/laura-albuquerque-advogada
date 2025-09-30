import Container from '../components/Container';
import { useState, useEffect } from 'react';

export default function Feedbacks() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.addedNodes.length > 0)) {
        setIsLoading(false);
        observer.disconnect();
      }
    });

    const widget = document.querySelector('.elfsight-app-3a7fda65-769d-44fa-af0f-05b92de905fb');
    if (widget) {
      observer.observe(widget, { childList: true, subtree: true });
    }

    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="bg-secondary w-full relative shadow-[inset_0_0_50px_rgba(0,0,0,0.3)]">
      <Container>
        <div className="flex flex-col items-center justify-center !my-10">
          <h1 className="apple-garamond xl:!text-6xl !text-4xl !mb-10">Avaliações</h1>
          <div className="w-full relative min-h-[300px]">
            <script src="https://elfsightcdn.com/platform.js" async></script>
            {isLoading && (
              <div className="absolute inset-0 bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-500 body-regular">Carregando avaliações...</p>
              </div>
            )}
            <div
              className="elfsight-app-3a7fda65-769d-44fa-af0f-05b92de905fb"
              style={{
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.2s ease-in',
              }}
            ></div>
          </div>
        </div>
      </Container>
    </div>
  );
}
