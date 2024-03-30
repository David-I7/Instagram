import "../assets/BirthdayModal.css";
import { AiOutlineClose } from "react-icons/ai";

type BirthdayModalProps = {
  setShowingModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const BirthdayModal = ({ setShowingModal }: BirthdayModalProps) => {
  return (
    <>
      <div className="modal-underlay-light"></div>
      <div className="BirthdayModal-container">
        <section className="BirthdayModal">
          <header className="flex p-2 text-center border-b border-b-gray-300 w-full">
            <h2 className="flex-grow font-medium">Birthdays</h2>
            <AiOutlineClose
              onClick={() => setShowingModal(false)}
              className="size-6 hover:cursor-pointer"
            />
          </header>
          <div className="flex-grow flex flex-col items-center pt-6 pb-4">
            <div className="birthdayImage"></div>
            <h3 className="w-4/5 text-xl text-center pt-4">
              Birthdays on Insatagram
            </h3>
            <p className="w-4/5 text-sm pt-4 text-center">
              Providing your birthday improves the features and ads you see, and
              helps us keep the Instagram community safe. You can find your
              birthday in your personal information account settings.
            </p>
          </div>

          <a
            className="text-blue-400 font-medium p-2 border-t border-3-gray-300 w-full text-center "
            href="https://help.instagram.com/"
          >
            Learn more
          </a>
        </section>
      </div>
    </>
  );
};

export default BirthdayModal;
