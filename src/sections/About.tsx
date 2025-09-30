import Container from '../components/Container';
import { useAboutConstants } from '../constants/useAboutConstants';

export default function About() {
  return (
    <div
      id="about"
      className="w-full bg-secondary relative shadow-[inset_0_50px_50px_-50px_rgba(0,0,0,0.3)]"
    >
      <Container>
        <div className="flex xl:flex-row flex-col gap-x-10 gap-y-6 !py-10">
          <div className="flex flex-col xl:w-[700px] w-full">
            <h1 className="apple-garamond header-1">SOBRE</h1>
            <h2 className="apple-garamond header-2 !mt-[-8px]">Dra. Laura Albuquerque</h2>
            <h3 className="header-3 !mt-4">
              Advogada especialista em Direito de Família e Sucessões, com atuação nacional e
              atendimento humanizado.
            </h3>
            <div className="body-large !mt-4 whitespace-pre-line">{useAboutConstants()}</div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="./assets/images/about.png" alt="about" />
          </div>
        </div>
      </Container>
    </div>
  );
}
