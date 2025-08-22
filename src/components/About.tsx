import Container from './Container';
import { useAboutConstants } from '../constants/useAboutConstants';

export default function About() {
  return (
    <div className="w-full bg-secondary">
      <Container>
        <div className="flex xl:flex-row flex-col gap-x-10 gap-y-6 !py-10">
          <div className="flex flex-col md:w-[700px] w-full">
            <h1 className="apple-garamond !text-7xl">SOBRE</h1>
            <h2 className="apple-garamond !text-4xl !mt-[-8px]">Dra. Laura Albuquerque</h2>
            <h3 className="!text-2xl !mt-4">
              Advogada especialista em Direito de Família e Sucessões, com atuação nacional e
              atendimento humanizado.
            </h3>
            <div className="!text-xl !mt-4 whitespace-pre-line">{useAboutConstants()}</div>
          </div>
          <div className="flex-1">
            <img src="../src/assets/images/about.png" alt="about" />
          </div>
        </div>
      </Container>
    </div>
  );
}
