import Typist from "react-typist";
import { useErrorBoundary, withErrorBoundary } from "react-use-error-boundary";

export const Slogan = withErrorBoundary(() => {
  const [error] = useErrorBoundary();

  if (error) {
    return (
      <>
        <span className="font-black">
          The <span className="text-tertiary">cryptocurrency</span>
        </span>
        <div className="my-8" />
        <span className="font-regular">of the future!</span>
      </>
    );
  }

  return (
    <>
      <Typist
        startDelay={1000}
        className="[&_.Cursor--blinking]:animate-typist"
      >
        <span className="font-black">
          The{" "}
          <span className="text-tertiary">
            cryptocurrency
            <Typist.Backspace count={5} delay={1000} />
            <Typist.Delay ms={750} />
            rency
          </span>
        </span>
        <div className="my-3 md:my-8" />
        <span className="font-regular">of the future!</span>
      </Typist>
    </>
  );
});
