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

export const Footer = () => {
  return (
    <>
      <div className="bg-black py-8">
        <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-8 md:gap-0">
          <div>
            <img src={logoImg} alt="Logo from Nasdacash" className="w-40" />
          </div>
          <div className="flex gap-8 flex-col md:flex-row items-center">
            <span className="order-2 md:order-1">
              &copy; nasdacash 2020 - {new Date().getUTCFullYear()}
            </span>
            <div className="flex gap-6 mx-3 order-1 md:order-2 flex-wrap justify-center">
              <a href="https://explorer2.nasda.cash" target="_blank">
                <Binoculars size={32} color="#ffffff" />
              </a>
              <a href="https://twitter.com/NsdCash" target="_blank">
                <TwitterLogo size={32} color="#ffffff" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCElBQeJUB9OAzsyIerUsgHQ"
                target="_blank"
              >
                <YoutubeLogo size={32} color="#ffffff" />
              </a>
              <a href="https://instagram.com/nsdcash" target="_blank">
                <InstagramLogo size={32} color="#ffffff" />
              </a>
              <a href="https://github.com/NasdaCash/NSDC" target="_blank">
                <GithubLogo size={32} color="#ffffff" />
              </a>
              <a href="https://discord.gg/XXMFuG8" target="_blank">
                <DiscordLogo size={32} color="#ffffff" />
              </a>
              <a href="https://t.me/NsdCash" target="_blank">
                <TelegramLogo size={32} color="#ffffff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
