import {
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
        <div className="container mx-auto flex flex-row justify-between">
          <div>
            <img src={logoImg} alt="Logo from Nasdacash" className="w-40" />
          </div>
          <div className="flex gap-8 items-center">
            <span>&copy; nasdacash 2020 - {new Date().getUTCFullYear()}</span>
            <div className="flex gap-6">
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
