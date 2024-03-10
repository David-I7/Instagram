import SelectLanguage from "../../../components/common/SelectLanguage";
import Accordion from "../../../components/common/Accordion";
import "../assets/CookiesModal.css";
import LearnMoreModal from "../components/LearnMoreModal";
import { useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

const CookiesModal = () => {
  const [showingModal, setShowingModal] = useState<boolean>(true);
  const [cookiesOptions, setCookiesOptions] = useLocalStorage("cookies", "");
  return (
    <>
      {showingModal && !cookiesOptions && (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          className="cookies-underlay flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-20"
        >
          <div className="flex flex-col bg-white cookies-modal-container pt-6 pb-2 rounded-lg divide-stone-300 divide-y-2">
            <article className="overflow-y-auto flex-grow px-6 cookies-modal-content pb-6">
              <header className="relative">
                <svg
                  fill="#333"
                  height="20px"
                  width="20px"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="hover:cursor-pointer absolute meatball-menu"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M8,6.5A1.5,1.5,0,1,1,6.5,8,1.5,1.5,0,0,1,8,6.5ZM.5,8A1.5,1.5,0,1,0,2,6.5,1.5,1.5,0,0,0,.5,8Zm12,0A1.5,1.5,0,1,0,14,6.5,1.5,1.5,0,0,0,12.5,8Z"></path>{" "}
                  </g>
                </svg>
                <SelectLanguage />
                <h2 className="font-bold text-2xl text-center pb-2 pt-6">
                  Allow the use of cookies from Instagram on this browser?
                </h2>
              </header>
              <p className="text-sm pb-3">
                We use cookies and similar technologies to help provide and
                improve content on Meta Products. We also use them to provide a
                safer experience by using information we receive from cookies on
                and off Instagram, and to provide and improve Meta Products for
                people who have an account.
              </p>
              <ul className="pl-8">
                <li className="text-sm pb-2">
                  Essential cookies: These cookies are required to use Meta
                  Products and are necessary for our sites to work as intended.
                </li>
                <li className="text-sm pb-2">
                  Cookies from other companies: We use these cookies to show you
                  ads off of Meta Products and to provide features like maps and
                  videos on Meta Products. These cookies are optional.
                </li>
              </ul>
              <p className="text-sm p-after">
                You have control over the optional cookies we use. Learn more
                about cookies and how we use them, and review or change your
                choices at any time in our Cookies Policy.
              </p>
              <section className="p-after">
                <h3 className="font-bold pb-6">About cookies</h3>
                <div className="about-cookies-card">
                  <section className="flex flex-col gap-6 items-center pt-8 border-solid border border-black rounded-xl h-44 w-56">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>cookie</title>{" "}
                        <g
                          id="🔍-Product-Icons"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="ic_fluent_cookies_24_regular"
                            fill="#212121"
                            fillRule="nonzero"
                          >
                            {" "}
                            <path
                              d="M12,2 C12.7139344,2 13.4186669,2.07493649 14.1058513,2.22228153 C14.6865234,2.34678839 14.8990219,3.06470877 14.4796691,3.48521478 C14.0147885,3.95137375 13.75,4.57867916 13.75,5.25 C13.75,6.42043414 14.5611837,7.42718287 15.6858365,7.68625206 C16.0559035,7.77149876 16.3038519,8.11989963 16.2631619,8.49747198 C16.2544079,8.57870262 16.25,8.66307444 16.25,8.75 C16.25,10.1307119 17.3692881,11.25 18.75,11.25 C19.4766017,11.25 20.151276,10.9392994 20.6235262,10.4053218 C21.0526462,9.92011177 21.8536336,10.1704416 21.9300905,10.8136579 C21.9765784,11.2047517 22,11.6008646 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,3.5 C7.30557963,3.5 3.5,7.30557963 3.5,12 C3.5,16.6944204 7.30557963,20.5 12,20.5 C16.4367197,20.5 20.0795061,17.1007677 20.4660785,12.7645841 L20.4850437,12.5084524 L20.492,12.351 L20.2985099,12.4390561 C19.9679152,12.5778546 19.6173377,12.672508 19.2549465,12.7182945 L18.9810657,12.743398 L18.75,12.75 C16.7439233,12.75 15.0827631,11.2732368 14.7943277,9.34751855 L14.7694285,9.14674696 L14.755,8.96 L14.6100904,8.89964226 C13.3259006,8.32272189 12.4198681,7.0959893 12.2714595,5.6656449 L12.2549278,5.44962193 L12.25,5.25 C12.25,4.80312661 12.3237894,4.36763736 12.4635899,3.95776709 L12.5553294,3.71503308 L12.64,3.525 L12.363736,3.50762946 L12,3.5 Z M15,16 C15.5522847,16 16,16.4477153 16,17 C16,17.5522847 15.5522847,18 15,18 C14.4477153,18 14,17.5522847 14,17 C14,16.4477153 14.4477153,16 15,16 Z M8,15 C8.55228475,15 9,15.4477153 9,16 C9,16.5522847 8.55228475,17 8,17 C7.44771525,17 7,16.5522847 7,16 C7,15.4477153 7.44771525,15 8,15 Z M12,11 C12.5522847,11 13,11.4477153 13,12 C13,12.5522847 12.5522847,13 12,13 C11.4477153,13 11,12.5522847 11,12 C11,11.4477153 11.4477153,11 12,11 Z M7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 Z"
                              id="🎨-Color"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <h4 className="font-medium text-sm">What are cookies?</h4>
                    <LearnMoreModal
                      heading="What are cookies?"
                      content={
                        <>
                          <p className="text-sm mb-2">
                            Cookies are small pieces of text that are used to
                            store and receive identifiers on a web browser. We
                            use cookies and similar technologies to offer Meta
                            Products and understand information we receive about
                            users, like their activity on other websites and
                            apps.
                          </p>
                          <p className="text-sm mb-2">
                            If you don't have an account, we don't use cookies
                            to personalize ads for you, and activity we receive
                            will be used only for the security and integrity of
                            our Products.
                          </p>
                          <p className="text-sm">
                            Learn more about cookies and the similar
                            technologies we use in our Cookies Policy.
                          </p>
                        </>
                      }
                    />
                  </section>
                  <section className="flex flex-col gap-6 items-center pt-8 border-solid border border-black rounded-xl h-44 w-56">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>shield</title>
                      <g strokeWidth="0"></g>
                      <g strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <h4 className="font-medium text-sm">
                      Why do we use cookies?
                    </h4>
                    <LearnMoreModal
                      heading={"Why do we use cookies?"}
                      content={
                        <>
                          <p className="text-sm">
                            Cookies help us provide, protect and improve the
                            Meta Products, such as by personalizing content,
                            tailoring and measuring ads, and providing a safer
                            experience.
                          </p>
                          <p className="text-sm mt-4">
                            While the cookies that we use may change from time
                            to time as we improve and update the Meta Products,
                            we use them for the following purposes:
                          </p>
                          <ul className="pl-4 mt-4 text-sm flex flex-col gap-y-2">
                            <li>Authentication to keep users logged in</li>
                            <li>
                              To ensure security, site and product integrity
                            </li>
                            <li>
                              To provide advertising, recommendations, insights
                              and measurement, if we show you ads
                            </li>
                            <li>To provide site features and services</li>
                            <li>To understand our Products' performance</li>
                            <li>To enable analytics and research</li>
                            <li>
                              On third-party websites and apps to help companies
                              that incorporate Meta technologies to share
                              information with us about activity on their apps
                              and websites.
                            </li>
                          </ul>
                          <p className="text-sm mt-4">
                            Learn more about cookies and how we use them in our{" "}
                            {""}
                            <a
                              href="#"
                              className="text-blue-900 hover:underline"
                            >
                              Cookies Policy
                            </a>
                          </p>
                        </>
                      }
                    />
                  </section>
                  <section className="flex flex-col gap-6 items-center pt-8 border-solid border border-black rounded-xl h-44 w-56">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>meta logo</title>{" "}
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="Brand"
                            transform="translate(-480.000000, -0.000000)"
                          >
                            {" "}
                            <g
                              id="meta_line"
                              transform="translate(480.000000, 0.000000)"
                            >
                              {" "}
                              <path
                                d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                id="MingCute"
                                fillRule="nonzero"
                              >
                                {" "}
                              </path>{" "}
                              <path
                                d="M8.06925,5.00237 C6.47461,4.89183 5.20472,5.81816 4.31715,6.9809 C3.42438,8.15046 2.79487,9.7015 2.44783,11.2489 C2.10089,12.7959 2.01419,14.4379 2.29341,15.813 C2.56477,17.1493 3.25726,18.5227 4.71368,18.9581 C6.10192,19.3731 7.34848,18.783 8.30022,17.9824 C9.25406,17.18 10.0806,16.0364 10.7459,14.9309 C11.2678,14.0637 11.7139,13.1803 12.0636,12.4265 C12.4134,13.1803 12.8595,14.0637 13.3814,14.9309 C14.0467,16.0364 14.8732,17.18 15.8271,17.9824 C16.7788,18.783 18.0254,19.3731 19.4136,18.9581 C20.87,18.5227 21.5625,17.1493 21.8339,15.813 C22.1131,14.4379 22.0264,12.7959 21.6795,11.2489 C21.3324,9.7015 20.7029,8.15046 19.8101,6.9809 C18.9226,5.81816 17.6527,4.89183 16.058,5.00237 C14.3243,5.12255 13.0879,6.47059 12.3715,7.49 C12.2613,7.64685 12.1586,7.80273 12.0636,7.95456 C11.9687,7.80273 11.866,7.64685 11.7558,7.49 C11.0394,6.47059 9.803,5.12255 8.06925,5.00237 Z M10.9193,10.0265 C10.6371,10.7417 9.95004,12.3747 9.03232,13.8996 C8.41066,14.9325 7.71866,15.8581 7.01275,16.4519 C6.30475,17.0474 5.7503,17.1805 5.28652,17.0419 C4.89094,16.9236 4.46993,16.4812 4.25341,15.415 C4.04476,14.3875 4.0958,13.0402 4.39936,11.6866 C4.70282,10.3335 5.23656,9.07262 5.90692,8.19443 C6.58247,7.30944 7.27559,6.95216 7.93095,6.99758 C8.69718,7.0507 9.46077,7.70266 10.1194,8.63992 C10.487,9.16295 10.7616,9.6916 10.9193,10.0265 Z M13.208,10.0265 C13.4902,10.7417 14.1773,12.3747 15.095,13.8996 C15.7166,14.9325 16.4086,15.8581 17.1145,16.4519 C17.8226,17.0474 18.377,17.1805 18.8408,17.0419 C19.2364,16.9236 19.6574,16.4812 19.8739,15.415 C20.0825,14.3875 20.0315,13.0402 19.7279,11.6866 C19.4245,10.3335 18.8907,9.07262 18.2204,8.19443 C17.5448,7.30944 16.8517,6.95216 16.1963,6.99758 C15.4301,7.0507 14.6665,7.70266 14.0079,8.63992 C13.6403,9.16295 13.3657,9.6916 13.208,10.0265 Z"
                                fill="#09244B"
                              >
                                {" "}
                              </path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <h4 className=" font-medium text-sm">
                      What are Meta Products?
                    </h4>
                    <LearnMoreModal
                      heading="What are Meta Products?"
                      content={
                        <>
                          <p className="text-sm">
                            Meta Products include the Facebook, Instagram and
                            Messenger apps, and any other features, apps,
                            technologies, software or services offered by Meta
                            under our Privacy Policy.
                          </p>
                          <p className="text-sm mt-4">
                            You can learn more about {""}
                            <a
                              href="#"
                              className="text-blue-900 hover:underline"
                            >
                              Meta Products in our Privacy Policy.
                            </a>
                          </p>
                        </>
                      }
                    />
                  </section>
                  <section className="flex flex-col gap-6 items-center pt-8 border-solid border border-black rounded-xl h-44 w-56 ">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>filter</title>
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                    <h4 className="font-medium text-sm">Your cookie choices</h4>
                    <LearnMoreModal
                      heading="Your cookie choices"
                      content={
                        <>
                          <p className="text-sm">
                            You have control over the optional cookies we use:
                          </p>
                          <ul className="pl-4 text-sm">
                            <li className="mt-4">
                              Our cookies on other apps and websites owned by
                              companies that use Meta technologies, such as the
                              Like button and Meta Pixel, can be used, including
                              to personalize your ads, if we show you ads.
                            </li>
                            <li className="mt-4">
                              We use cookies from other companies to show you
                              ads off of Meta Products, and to provide features
                              like maps and video on Meta Products.
                            </li>
                          </ul>
                          <p className="text-sm mt-4">
                            You can review or change your choices at any time in
                            your Cookies settings.
                          </p>
                        </>
                      }
                    />
                  </section>
                </div>
              </section>
              <section className="pt-2 p-after">
                <h3 className="font-bold">Cookies from other companies</h3>
                <p className="text-sm py-3">
                  We use cookies from other companies in order to show you ads
                  off of our Products, and provide features like maps, payment
                  services and video.
                </p>
                <Accordion
                  items={[
                    {
                      header: "How we use these Cookies",
                      content: (
                        <>
                          <p className="text-sm">
                            We use cookies from other companies on our Products:
                          </p>
                          <ul className="px-4 py-3">
                            <li className="text-sm mb-2">
                              To show you ads about our Products and features on
                              other companies' apps and websites.
                            </li>
                            <li className="text-sm mb-2">
                              To provide features on our Products such as maps,
                              payment services and video.
                            </li>
                            <li className="text-sm">For analytics.</li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      header: "If you allow these cookies",
                      content: (
                        <>
                          <ul className="px-4 py-3">
                            <li className="text-sm mb-2">
                              Features you use on Meta Products will not be
                              affected.
                            </li>
                            <li className="text-sm mb-2">
                              We'll be able to better personalize ads for you
                              off of Meta Products, and measure their
                              performance.
                            </li>
                            <li className="text-sm">
                              Other companies will receive information about you
                              by using their cookies.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      header: "If you don't allow these cookies",
                      content: (
                        <>
                          <ul className="px-4 pb-4 pt-1">
                            <li className="text-sm mb-2">
                              Some features on our products may not work.
                            </li>
                            <li className="text-sm">
                              We won't use cookies from other companies to
                              personalize ads for you off of Meta Products, or
                              measure their performance.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                  ]}
                  title="Chevron icon to see cookie consent section"
                />
              </section>
              <section className="pt-2">
                <h3 className="font-bold pb-2">
                  Other ways you can control your information
                </h3>
                <Accordion
                  items={[
                    {
                      header: "Manage your ad experience in Accounts center",
                      content: (
                        <>
                          <p className="text-sm pb-3 pt-2">
                            You can manage your ad experience by visiting the
                            following settings.
                          </p>
                          <h4 className="font-bold pb-3">Ad preferences</h4>
                          <p className=" text-sm">
                            In Ad preferences, you can choose whether we show
                            you ads and make choices about the information used
                            to show you ads.
                          </p>
                          <h4 className="font-bold py-3">Ad settings</h4>
                          <p className=" text-sm">
                            If we show you ads, we use data that advertisers and
                            other partners provide us with about your activity
                            off Meta Company Products, including websites and
                            apps to show you better ads. You can control whether
                            we use this data to show you ads in{" "}
                            <a href="/">ad settings</a> .
                          </p>
                        </>
                      ),
                    },
                    {
                      header: "More information about online advertising",
                      content: (
                        <>
                          <p className="text-sm py-2">
                            Instagram adheres to the Self-Regulatory Principles
                            for Online Behavioral Advertising and participates
                            in the opt-out programs established by the{" "}
                            <a
                              className="text-blue-800"
                              target="_blank"
                              href="www.aboutads.info"
                            >
                              Digital Advertising Alliance
                            </a>
                            , the{" "}
                            <a
                              className="text-blue-800"
                              target="_blank"
                              href="https://youradchoices.ca"
                            >
                              Digital Advertising Alliance of Canada
                            </a>{" "}
                            and the{" "}
                            <a
                              className="text-blue-800"
                              target="_blank"
                              href="https://youronlinechoices.eu"
                            >
                              European Digital Advertising Alliance
                            </a>
                            . You can opt out from all participating companies
                            through these sites.
                          </p>
                        </>
                      ),
                    },
                    {
                      header: "Controlling cookies with browser settings",
                      content: (
                        <>
                          <p className="text-sm pt-2 pb-4">
                            Your browser or device may offer settings that allow
                            you to choose whether browser cookies are set and to
                            delete them. These controls vary by browser, and
                            manufacturers may change both the settings they make
                            available and how they work at any time. As of 5
                            October 2020, you may find additional information
                            about the controls offered by popular browsers at
                            the links below. Certain parts of Facebook Products
                            may not work properly if you have disabled browser
                            cookies. Please be aware that these controls are
                            distinct from the controls that Instagram offers.
                          </p>
                          <ul className="pl-6 text-blue-800">
                            <li className="text-sm">
                              <a
                                href="https://support.google.com/chrome/answer/95647"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                              >
                                Google Chrome
                              </a>
                            </li>
                            <li className="text-sm">
                              <a
                                href="https://support.microsoft.com/en-ie/help/17442/windows-internet-explorer-delete-manage-cookies"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                              >
                                Internet Explorer
                              </a>
                            </li>
                            <li className="text-sm">
                              <a
                                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                              >
                                Firefox
                              </a>
                            </li>
                            <li className="text-sm">
                              <a
                                href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                              >
                                Safari
                              </a>
                            </li>
                            <li className="text-sm">
                              <a
                                href="https://support.apple.com/en-us/HT201265"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                              >
                                Safari Mobile
                              </a>
                            </li>
                            <li className="text-sm">
                              <a
                                href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                              >
                                Opera
                              </a>
                            </li>
                          </ul>
                        </>
                      ),
                    },
                  ]}
                  title="Chevron icon to see cookie consent section"
                />
              </section>
            </article>
            <div
              onClick={() => {
                setShowingModal(false);
                setCookiesOptions("all");
              }}
              className="flex justify-center items-center min-h-10 allow-cookies-container"
            >
              <button className="text-blue-400 font-bold">
                Allow All Cookies
              </button>
            </div>
            <div
              onClick={() => {
                setShowingModal(false);
                setCookiesOptions("required");
              }}
              className="flex justify-center items-center min-h-8 decline-cookies-container"
            >
              <button>Decline Optional Cookies</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiesModal;
