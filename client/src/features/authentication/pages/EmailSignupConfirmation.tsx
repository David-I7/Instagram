import Footer from "../../../components/common/Footer";
import DynamicSubmitButton from "../components/DynamicSubmitButton";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { getTailwindStyles } from "../helpers/Styles";
import "../assets/EmailSignupConfirmation.css";

const EmailSignupConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <main className="flex flex-col gap-y-2 items-center pt-4 pb-16">
        <section className="EmailConfirmation-card">
          <div className="emailImage"></div>
          <h1 className=" font-semibold py-2">Enter Confirmation Code</h1>
          <p className="text-sm pt-2 pb-5 text-center">
            Enter the confirmation code we sent to{" "}
            {location.state.secondaryUsername}.{" "}
            <button type="button" className="text-blue-400 font-medium text-sm">
              Resend Code.
            </button>
          </p>

          <form className="w-full">
            <div className="w-full p-2">
              <input
                className="border border-gray-300 outline-none p-2 rounded-lg w-full bg-gray-50 placeholder:text-gray-300"
                type="text"
                name="confirmationCode"
                placeholder="Confirmation code"
                autoComplete="off"
              />
            </div>

            <div className="py-4 px-2 w-full">
              <DynamicSubmitButton
                content="Next"
                tailwindStyles={getTailwindStyles(true)}
              />
            </div>
          </form>

          <button
            className="text-blue-400 font-medium text-sm"
            type="button"
            onClick={() => {
              navigate("/emailsignup", { state: location.state });
            }}
          >
            Go back
          </button>
        </section>
        <section className="Birthday-login">
          <p>
            Have an account?{" "}
            <Link className="text-blue-400 font-medium" to="/login">
              Log in
            </Link>
          </p>
        </section>
        <section className="Birthday-getApp">
          <p className="text-center">Get the app.</p>
          <div className="flex gap-x-4 justify-center mt-4">
            <a
              aria-label="Get it on Google Play"
              href="https://l.instagram.com/?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.instagram.android%26referrer%3Dig_mid%253DBBD30771-9BC8-450B-B194-C79BAC400E5D%2526utm_campaign%253DloginPage%2526utm_content%253Dlo%2526utm_source%253Dinstagramweb%2526utm_medium%253Dbadge%2526original_referrer%253Dhttps%25253A%25252F%25252Fwww.google.com%25252F&amp;e=AT3Fbosy1QiGzAgJ-Kjd9v0vBiAFaxUj_eujS1aXFFfegiBqaPjrjppJ_vGh9_YKqjoZeLmVdipLyPzg_6mgl1guJZGQpyRkqwjPW-yDHMvsk50c0olXeO6wpGvvGBCUTlhqKVcaWggQ9NPbrOh3Dw"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <img
                alt="Get it on Google Play"
                width={"140"}
                className=" min-w-24"
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              />
            </a>
            <a
              aria-label="Get it from Microsoft"
              href="ms-windows-store://pdp/?productid=9nblggh5l9xt&amp;referrer=appbadge&amp;source=www.instagram.com&amp;mode=mini&amp;pos=-10%2C0%2C1050%2C1037"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <img
                alt="Get it from Microsoft"
                width={"120px"}
                className=" min-w-20"
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EmailSignupConfirmation;
