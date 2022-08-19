import { AppleLogo, LinuxLogo, WindowsLogo } from "phosphor-react";

export const WalletDownload = () => {
  return (
    <div className="bg-footer">
      <div className="container mx-auto flex flex-col gap-8 py-14">
        <h1 className="text-center text-4xl font-black">Wallets</h1>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col justify-center items-center gap-4">
            <a
              href="https://github.com/NasdaCash/NSDC/releases/download/v1.0/NasdaCash-macOS.zip"
              download
              className="rounded-full p-8 bg-secondary hover:scale-110"
            >
              <AppleLogo size={32} color="#ffffff" />
            </a>
            <span>Mac</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <a
              href="https://github.com/NasdaCash/NSDC/releases/download/v1.0/NasdaCash-linux.tar.gz"
              download
              className="rounded-full p-8 bg-secondary hover:scale-110"
            >
              <LinuxLogo size={32} color="#ffffff" />
            </a>
            <span>Linux</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <a
              href="https://github.com/NasdaCash/NSDC/releases/download/v1.0/NasdaCash-win64.zip"
              download
              className="rounded-full p-8 bg-secondary hover:scale-110"
            >
              <WindowsLogo size={32} color="#ffffff" />
            </a>
            <span>Windows</span>
          </div>
        </div>
      </div>
    </div>
  );
};
