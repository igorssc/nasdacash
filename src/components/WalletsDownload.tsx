import { AppleLogo, LinuxLogo, WindowsLogo } from "phosphor-react";
import { Container } from "./Container";
import { Title } from "./Title";

export const WalletDownload = () => {
  return (
    <>
      <div className="bg-footer" id="wallets">
        <Container>
          <Title title="Wallets" />
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col justify-center items-center gap-4">
              <a
                href="https://github.com/NasdaCash/NSDC/releases/download/v1.0/NasdaCash-macOS.zip"
                download
                className="rounded-full p-6 sm:p-8 bg-miningDetails hover:scale-110"
              >
                <AppleLogo size={32} color="#ffffff" />
              </a>
              <span>Mac</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <a
                href="https://github.com/NasdaCash/NSDC/releases/download/v1.0/NasdaCash-linux.tar.gz"
                download
                className="rounded-full p-6 sm:p-8 bg-miningDetails hover:scale-110"
              >
                <LinuxLogo size={32} color="#ffffff" />
              </a>
              <span>Linux</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <a
                href="https://github.com/NasdaCash/NSDC/releases/download/v1.0/NasdaCash-win64.zip"
                download
                className="rounded-full p-6 sm:p-8 bg-miningDetails hover:scale-110"
              >
                <WindowsLogo size={32} color="#ffffff" />
              </a>
              <span>Windows</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
