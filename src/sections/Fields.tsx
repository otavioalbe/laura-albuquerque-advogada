import { useFieldsConstants } from '../constants/useFieldsConstants';
import Container from '../components/Container';
import FieldCard from '../components/FieldCard';

export default function Fields() {
  return (
    <div id="fields" className="w-full bg-secondary">
      <Container>
        <div className="flex flex-col gap-y-4 !py-10">
          <h1 className="xl:!text-7xl md:!text-5xl !text-[43px] apple-garamond self-center">
            ÁREAS DE ATUAÇÃO
          </h1>
          <div className="flex flex-col gap-y-4 !mt-4">
            {useFieldsConstants().map((field) => (
              <FieldCard key={field.title} {...field} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
