interface TitleProps {
  preTitle?: string;
  title: string;
  resume?: string;
}

export const Title = ({ preTitle = "", title, resume }: TitleProps) => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center text-xl lg:text-2xl font-black relative z-10 inline-block">
          {preTitle}
          <span className="block mt-4 text-4xl lg:text-5xl">{title}</span>
        </h1>
        {resume && <h2 className="text-lg mt-4">{resume}</h2>}
      </div>
    </>
  );
};
