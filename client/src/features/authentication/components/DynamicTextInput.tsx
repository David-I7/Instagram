import { ChangeEvent } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

interface DynamicTextInputProps {
  placeholder: string;
  name: string;
  textInput: string;
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
  validInput?: boolean;
}

const DynamicTextInput = ({
  placeholder,
  name,
  textInput,
  setTextInput,
  validInput,
}: DynamicTextInputProps) => {
  console.log(validInput, textInput.length);
  return (
    <>
      <div
        className={`${
          textInput.length > 0 ? "px-2 py-1" : "p-2"
        } mb-2 flex w-full items-center bg-gray-100 text-gray-500 text-xs border border-gray-300 rounded-sm focus-within:outline focus-within:outline-1 focus-within:outline-gray-400`}
      >
        <div className="w-full">
          {textInput && <span className="authPlaceholder">{placeholder}</span>}

          <input
            className="text-black outline-none bg-gray-100 placeholder:text-gray-500 w-30 w-full"
            type="text"
            autoComplete="on"
            name={name}
            value={textInput}
            placeholder={placeholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTextInput(e.target.value);
            }}
          />
        </div>
        <div>
          {validInput === true && textInput.length > 0 && (
            <FaCheck className="border-gray-400 text-gray-400 rounded-full border-2 size-6 m-1 p-1" />
          )}
          {validInput === false && textInput.length > 0 && (
            <FaTimes className="border-red-500 text-red-500 rounded-full border-2 size-6 m-1 p-1" />
          )}
        </div>
      </div>
    </>
  );
};

export default DynamicTextInput;
