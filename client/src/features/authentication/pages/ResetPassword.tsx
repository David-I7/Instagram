import DynamicTextInput from "../components/DynamicTextInput";
import Footer from "../../../components/common/Footer";
import "../assets/ResetPassword.css";
import { Link } from "react-router-dom";
import { RiLockFill } from "react-icons/ri";

const ResetPassword = () => {
  return (
    <>
      <div className="border-b mb-10 follow-effect">
        <header className="ResetPassword-header">
          <h1 className="text-2xl p-4">
            <Link to="/login">Instagram</Link>
          </h1>
        </header>
      </div>
      <main className="ResetPassword-main">
        <section className="ResetPassword-container">
          <div>
            <RiLockFill className="size-24 border-4 rounded-full border-black p-4" />
          </div>
          <p className=" font-medium text-center">Trouble logging in?</p>
          <p className="text-sm w-4/5 text-center text-slate-500">
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </p>
          <form className="w-4/5">
            <DynamicTextInput
              name="username"
              placeholder="Email, Phone or Username"
            />
            <button
              disabled
              className="text-white bg-blue-400 w-full rounded-lg p-1 mt-3"
            >
              Send login link
            </button>
          </form>
          <a
            className="text-xs w-4/5 text-center mb-4"
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.instagram.com/accounts/account_recovery/?username="
          >
            Can't reset your password?
          </a>
          <div className="or-transition flex w-4/5">
            <span className="text-slate-500 font-bold text-xs ">OR</span>
          </div>
          <Link
            to="/emailsignup"
            className="w-4/5 text-center font-medium mb-16 text-sm"
          >
            Create a new account
          </Link>
          <Link
            to="/login"
            className=" border w-full text-center font-medium bg-gray-50 p-2"
          >
            Back to login
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResetPassword;
