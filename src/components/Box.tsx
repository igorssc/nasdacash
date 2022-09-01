import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

interface BoxProps {
  isFitured?: boolean;
  title: string;
  description: string;
  icon?: string;
  link?: {
    text: string;
    href: string;
  };
}

export const Box = ({
  title,
  description,
  icon,
  link,
  isFitured,
}: BoxProps) => {
  return isFitured ? (
    <div className="flex flex-col lg:grid lg:grid-cols-[1fr,2fr] lg:flex-row gap-12 justify-between py-12 px-6 lg:px-8 xl:px-12 bg-group xl:bg-featured xl:hover:bg-featuredHover xl:bg-no-repeat xl:bg-[length:450px_auto,cover] xl:bg-[position:-100px_-10px,0,0] ease-out duration-700 relative z-10 mt-20 md:mt-14 lg:mt-0">
      <div className="flex items-center justify-center lg:items-start lg:justify-start h-7 lg:h-auto">
        <img
          src={icon}
          alt="featured"
          className="w-36 lg:w-40 relative -top-12 lg:top-0"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-black">{title}</h1>
        <p className="text-justify">{description}</p>
        {link?.href && (
          <div>
            <Link to={link.href}>
              <span className="border-b-2 border-purple-500 pb-2 font-black inline-block">
                {link.text}
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="bg-group py-10 px-5 md:p-10 relative z-10">
      {icon && (
        <ReactSVG src={icon} className="w-16 md:w-24 fill-purple-500 mb-5" />
      )}
      <h3 className="border-b-2 border-purple-500 inline-block pb-3 mb-5 text-xl font-black">
        {title}
      </h3>
      <p className="text-justify">{description}</p>
      {link?.href && (
        <Link
          to={link.href}
          className="text-purple-500 inline-block pb-3 mt-8 text-xl font-black"
        >
          {link.text} <span className="text-white font-black ml-3">{">"}</span>
        </Link>
      )}
    </div>
  );
};
