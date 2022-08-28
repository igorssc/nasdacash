import { HTMLProps, ReactNode } from "react";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div {...rest}>
      <div
        className={`container mx-auto py-14 px-4 flex flex-col gap-16 ${
          className || ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};
