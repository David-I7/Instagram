import DynamicTextInput from "../components/DynamicTextInput";
import Footer from "../../../components/common/Footer";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <header className="">
        <h1>
          <Link to="/login">Instagram</Link>
        </h1>
      </header>
      <main>
        <section>
          <p>image</p>
          <p>Trouble logging in?</p>
          <p>
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </p>
          <form>
            <DynamicTextInput
              name="username"
              placeholder="Email, Phone or Username"
            />
            <button disabled>Send login link</button>
          </form>
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.instagram.com/accounts/account_recovery/?username="
          >
            Can't reset your password?
          </a>
          <div className="or-transition flex w-full mb-6">
            <span className="text-slate-500 font-bold text-xs">OR</span>
          </div>
          <Link to="/emailsignup">Create a new account</Link>
          <br></br>
          <Link to="/login">Back to login</Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ResetPassword;
