import { ChangeEvent, useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

interface DynamicPasswordInputProps {
  pwdInput: string;
  setPwdInput: React.Dispatch<React.SetStateAction<string>>;
  validPwd?: boolean;
}

const DynamicPasswordInput = ({
  pwdInput,
  setPwdInput,
  validPwd,
}: DynamicPasswordInputProps) => {
  const [pwdIsShowing, setPwdIsShowing] = useState<boolean>(false);

  return (
    <div
      className={`${
        pwdInput.length > 0 ? "px-2 py-1" : "p-2"
      } mb-2 flex w-full items-center bg-gray-100 text-gray-500 text-xs border border-gray-300 rounded-sm focus-within:outline focus-within:outline-1 focus-within:outline-gray-400`}
    >
      <div className="flex flex-col w-full ">
        {pwdInput && <span className="authPlaceholder">Password</span>}

        <input
          style={pwdInput.length > 0 ? { height: "1rem" } : undefined}
          className="bg-gray-100 placeholder:text-gray-500 outline-none text-black"
          placeholder="Password"
          autoComplete="off"
          type={pwdIsShowing ? "text" : "password"}
          name="pwd"
          value={pwdInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPwdInput(e.target.value)
          }
        />
      </div>
      {pwdInput.length > 0 && (
        <>
          <div>
            {validPwd === false && (
              <FaTimes className="border-red-500 text-red-500 rounded-full border-2 size-6 m-1 p-1" />
            )}
            {validPwd === true && (
              <FaCheck className="border-gray-400 text-gray-400 rounded-full border-2 size-6 m-1 p-1" />
            )}
          </div>
          <span
            tabIndex={0}
            onClick={() => {
              setPwdIsShowing(!pwdIsShowing);
            }}
            className="font-bold text-sm cursor-pointer mx-2 text-black"
          >
            {pwdIsShowing ? "Hide" : "Show"}
          </span>
        </>
      )}
    </div>
  );
};

export default DynamicPasswordInput;
