import Footer from "../../../components/common/Footer";
import "../assets/Login.css";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <main className="Login">
        <section className="Login-container flex flex-col justify-center w-4/6 max-w-sm rounded-sm ">
          <h1 className="invisible absolute -top-96 -left-96">Instagram</h1>
          <div className="instagramHeadingImage self-center mt-4 mb-10"></div>
          <LoginForm />
          <div className="or-transition flex w-full mb-6">
            <span className="text-slate-500 font-bold text-xs">OR</span>
          </div>
          <a href="/" className="flex justify-center gap-2 text-sm mb-6">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 48 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>facebook logo</title> <desc></desc> <defs> </defs>{" "}
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Color-"
                    transform="translate(-200.000000, -160.000000)"
                    fill="#4460A0"
                  >
                    {" "}
                    <path
                      d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                      id="Facebook"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <p className="text-blue-900 font-medium">Login with Facebook</p>
          </a>

          <Link
            to="/login/resetpassword"
            className="text-slate-500 block text-center text-xs pb-2"
          >
            Forgot password?
          </Link>
        </section>
        <section className="signup-container w-4/6 max-w-sm text-center p-4 rounded-sm">
          <p>
            Don't have an account?{" "}
            <Link to="/emailsignup" className="text-blue-400">
              Sign up
            </Link>
          </p>
        </section>
        <section className="w-4/6 max-w-sm">
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
                className=" min-w-32"
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
                className=" min-w-28"
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

export default Login;
