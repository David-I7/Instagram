import { ChangeEvent, useState } from "react";

interface DynamicTextInputProps {
  placeholder: string;
  name: string;
}

const DynamicTextInput = ({ placeholder, name }: DynamicTextInputProps) => {
  const [textInput, setTextInput] = useState<string>("");
  return (
    <div
      style={textInput.length > 0 ? { padding: "0.25rem 0.5rem" } : undefined}
      className="Login-input-container focus-within:outline focus-within:outline-1 focus-within:outline-gray-400"
    >
      {textInput && <span>{placeholder}</span>}

      <input
        style={textInput.length > 0 ? { height: "1rem" } : undefined}
        className="Login-input placeholder:text-gray-500"
        type="text"
        autoComplete="on"
        name={name}
        value={textInput}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTextInput(e.target.value)
        }
      />
    </div>
  );
};

export default DynamicTextInput;
