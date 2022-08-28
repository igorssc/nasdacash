interface MiningHighlightProps {
  title: string;
  subTitle: string;
  resume: string;
  image: string;
}

export const MiningHighlight = ({
  title,
  subTitle,
  resume,
  image,
}: MiningHighlightProps) => {
  return (
    <>
      <div className="container mx-auto py-10 md:py-20 grid md:grid-cols-2 text-center md:text-left">
        <div>
          <h1 className="text-xl lg:text-3xl">
            {title}{" "}
            <span className="block text-4xl lg:text-6xl font-black mt-4">
              {subTitle}
            </span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl">{resume}</p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="image from mining"
            className="h-52 md:h-72 animate-details mt-20 md:mt-0"
          />
        </div>
      </div>
    </>
  );
};
