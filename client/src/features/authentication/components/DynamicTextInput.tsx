import { ChangeEvent, useState } from "react";

const DynamicTextInput = () => {
  const [usernameInput, setUsernameInput] = useState<string>("");
  return (
    <div
      style={
        usernameInput.length > 0 ? { padding: "0.25rem 0.5rem" } : undefined
      }
      className="Login-input-container focus-within:outline focus-within:outline-1 focus-within:outline-gray-400"
    >
      {usernameInput && <span>Phone number, username or email</span>}

      <input
        style={usernameInput.length > 0 ? { height: "1rem" } : undefined}
        className="Login-input placeholder:text-gray-500"
        type="text"
        autoComplete="on"
        name="username"
        value={usernameInput}
        placeholder="Phone number, username or email"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsernameInput(e.target.value)
        }
      />
    </div>
  );
};

export default DynamicTextInput;
