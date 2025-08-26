import Container from './Container';

export default function Feedbacks() {
  return (
    <div className="bg-secondary w-full relative shadow-[inset_0_0_50px_rgba(0,0,0,0.3)]">
      <Container>
        <div className="flex flex-col items-center justify-center !my-10">
          <h1 className="apple-garamond xl:!text-6xl !text-4xl !mb-10">Avaliações</h1>
          <div>
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div
              className="elfsight-app-3a7fda65-769d-44fa-af0f-05b92de905fb"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </Container>
    </div>
  );
}
