import { Disclosure, Transition } from "@headlessui/react";
import { CaretUp } from "phosphor-react";

interface QuestionsProps {
  question: string;
  answer: string;
}

export const Question = ({ question, answer }: QuestionsProps) => {
  return (
    <>
      <div className="question">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between px-4 py-8 text-left text-base font-bold text-white">
                <span>{question}</span>
                <CaretUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-8 text-sm text-justify font-light leading-6">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: answer,
                    }}
                  ></p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};
