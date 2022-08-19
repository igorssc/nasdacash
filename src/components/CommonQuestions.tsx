import { Question } from "./Question";

export const CommonQuestions = () => {
  return (
    <div className="px-4 pt-16 py-10 flex flex-col items-center">
      <h1 className="text-center text-4xl font-black mb-6 relative z-10">
        FAQs
      </h1>
      <div className="container mx-auto w-full p-2 relative z-10">
        <Question
          question="What is your refund policy?"
          answer="If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions
                      asked. Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s with
                      the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing software
                      like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <Question
          question="What is your refund policy?"
          answer="If you're unhappy with your purchase for any reason, email us
                      within 90 days and we'll refund you in full, no questions
                      asked. Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s with
                      the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing software
                      like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
    </div>
  );
};
