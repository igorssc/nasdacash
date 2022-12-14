import { Disclosure, Transition } from "@headlessui/react";
import { CaretUp } from "phosphor-react";

interface QuestionsProps {
  question: string;
  answer: string;
}

export const QuestionDisclosure = ({ question, answer }: QuestionsProps) => {
  return (
    <>
      <div className="border-purple-200/50 border-t-[1px] first:border-0">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between px-2 py-8 text-left text-base font-bold text-white">
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
                <Disclosure.Panel className="px-2 pb-8 text-sm text-justify leading-6">
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
