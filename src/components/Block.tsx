import { ReactSVG } from "react-svg";

interface BlockProps {
  title: string;
  description: string;
  icon?: string;
  link?: {
    text: string;
    href: string;
  };
}

export const Block = ({ title, description, icon, link }: BlockProps) => {
  return (
    <div className="bg-group py-10 px-5 md:p-10 relative z-10">
      {icon && (
        <ReactSVG src={icon} className="w-16 md:w-24 fill-purple-500 mb-5" />
      )}
      <h3 className="border-b-2 border-purple-500 inline-block pb-3 mb-5 text-xl font-black">
        {title}
      </h3>
      <p className="text-justify">{description}</p>
      {link?.href && (
        <a
          href={link.href}
          className="text-purple-500 inline-block pb-3 mt-8 text-xl font-black"
        >
          {link.text} <span className="text-white font-black ml-3">{">"}</span>
        </a>
      )}
    </div>
  );
};
