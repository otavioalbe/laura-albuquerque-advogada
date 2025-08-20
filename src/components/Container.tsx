export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full !max-w-[328px] h-full mx-auto md:!max-w-full xl:!max-w-[1318px]">
        {children}
      </div>
    </div>
  );
}
