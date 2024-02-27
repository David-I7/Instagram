import { ReactNode, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

type LearnMoreModalProps = {
  heading: ReactNode;
  content: ReactNode;
};

const LearnMoreModal = ({ heading, content }: LearnMoreModalProps) => {
  const [showingModal, setShowingModal] = useState<boolean>(false);
  return (
    <>
      <button
        className="LearnMore-button"
        onClick={() => {
          setShowingModal(!showingModal);
        }}
      >
        Learn more
      </button>
      {showingModal && (
        <div
          className="LearnMore-underlay flex justify-center items-center absolute"
          style={{
            backgroundColor: "rgba(0,0,0,0.75)",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <article className="LearnMore-container bg-white rounded-lg">
            <header className="LearnMore-header flex items-center justify-end p-2 gap-x-2">
              <p className="w-11/12 font-bold text-center" role="heading">
                {heading}
              </p>
              <AiOutlineClose
                className="hover:cursor-pointer size-6"
                onClick={() => setShowingModal(false)}
              />
            </header>
            <section className="LearnMore-content px-6 mt-4 mb-8 h-full overflow-auto">
              {content}
            </section>
          </article>
        </div>
      )}
    </>
  );
};
export default LearnMoreModal;
