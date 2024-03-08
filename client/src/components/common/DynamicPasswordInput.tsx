import { ChangeEvent, useRef, useState } from "react";

const DynamicPasswordInput = () => {
  const [pwdInput, setPwdInput] = useState<string>("");
  const [pwdIsShowing, setPwdIsShowing] = useState<boolean>(false);
  const pwdRef = useRef<HTMLInputElement>(null);

  const handleShowPasswordClick = () => {
    if (pwdRef.current!.type === "password") {
      pwdRef.current!.type = "text";
    } else {
      pwdRef.current!.type = "password";
    }

    setPwdIsShowing(!pwdIsShowing);
  };
  return (
    <div className="Login-show-container focus-within:outline focus-within:outline-1 focus-within:outline-gray-400">
      <div
        style={
          pwdInput.length > 0
            ? { padding: "0.25rem 0.5rem", margin: 0, border: "none" }
            : { margin: 0, border: "none" }
        }
        className="Login-input-container"
      >
        {pwdInput && <span>Password</span>}

        <input
          style={pwdInput.length > 0 ? { height: "1rem" } : undefined}
          className="Login-input placeholder:text-gray-500"
          placeholder="Password"
          autoComplete="off"
          type="password"
          name="pwd"
          ref={pwdRef}
          value={pwdInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPwdInput(e.target.value)
          }
        />
      </div>
      {pwdInput.length > 0 && (
        <span
          tabIndex={0}
          onClick={handleShowPasswordClick}
          className="font-bold text-sm cursor-pointer mr-2"
        >
          {pwdIsShowing ? "Hide" : "Show"}
        </span>
      )}
    </div>
  );
};

export default DynamicPasswordInput;
