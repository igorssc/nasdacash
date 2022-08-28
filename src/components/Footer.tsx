import {
  Binoculars,
  DiscordLogo,
  GithubLogo,
  InstagramLogo,
  TelegramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import logoImg from "../assets/footer-logo.png";
import { Container } from "./Container";

const socialNetwork = [
  { link: "https://explorer2.nasda.cash", Icon: Binoculars },
  { link: "https://twitter.com/NsdCash", Icon: TwitterLogo },
  {
    link: "https://www.youtube.com/channel/UCElBQeJUB9OAzsyIerUsgHQ",
    Icon: YoutubeLogo,
  },
  { link: "https://instagram.com/nsdcash", Icon: InstagramLogo },
  { link: "https://github.com/NasdaCash/NSDC", Icon: GithubLogo },
  { link: "https://discord.gg/XXMFuG8", Icon: DiscordLogo },
  { link: "https://t.me/NsdCash", Icon: TelegramLogo },
];

export const Footer = () => {
  return (
    <>
      <div className="bg-black py-8">
        <Container className="lg:flex-row flex-wrap justify-center lg:justify-between gap-8 lg:gap-0 items-center">
          <div>
            <img src={logoImg} alt="Logo from Nasdacash" className="w-40" />
          </div>
          <div className="flex gap-8 flex-col lg:flex-row items-center">
            <span className="order-2 lg:order-1">
              &copy; nasdacash 2020 - {new Date().getUTCFullYear()}
            </span>
            <div className="flex gap-6 mx-3 order-1 lg:order-2 flex-wrap justify-center">
              {socialNetwork.map(({ link, Icon }) => (
                <a href={link} target="_blank">
                  <Icon size={32} color="#ffffff" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
