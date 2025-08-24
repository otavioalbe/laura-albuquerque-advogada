export default function DifferenceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="flex flex-col shadow-xl xl:shadow-2xl bg-secondary rounded-lg w-[300px] xl:h-[375px] h-[325px] text-center items-center !px-2 !py-5">
      <img src={icon} alt="icon" className="w-[120px] h-[120px] !text-primary" />
      <h1 className="body-large !leading-[24px] w-[200px] !pb-5">{title}</h1>
      <p className="body-regular">{description}</p>
    </div>
  );
}
