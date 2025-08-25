import type { CardType } from '../types/CardType';

export default function FieldCard({ title, description, icon, backgroundColor }: CardType) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center text-center md:text-left gap-x-4 md:!pb-0 !pb-4 !px-4 md:!px-0 w-full rounded-lg ${backgroundColor} p-4`}
    >
      <img className="w-20 h-20 !my-3 !ml-5 !mr-3" src={icon} alt={title} />
      <div className="flex flex-col justify-center">
        <h1 className="body-large !font-bold">{title}</h1>
        <h2 className="body-regular !pr-2">{description}</h2>
      </div>
    </div>
  );
}
