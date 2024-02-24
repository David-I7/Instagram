import Accordion from "../common/Accordion";
import "./assets/CookiesModal.css";

const CookiesModal = () => {
  return (
    <div className="flex justify-center items-center fixed bg-gray-600 top-0 left-0 right-0 bottom-0">
      <div className="flex flex-col bg-white cookies-modal-container pt-6 pb-2 rounded-lg divide-stone-300 divide-y-2">
        <article className="overflow-y-auto flex-grow px-6 cookies-modal-content pb-6 relative ">
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
          <h2 className="font-bold text-2xl text-center pb-2 pt-6">
            Allow the use of cookies from Instagram on this browser?
          </h2>
          <p className="text-sm pb-3">
            We use cookies and similar technologies to help provide and improve
            content on Meta Products. We also use them to provide a safer
            experience by using information we receive from cookies on and off
            Instagram, and to provide and improve Meta Products for people who
            have an account.
          </p>
          <ul className="pl-8">
            <li className="text-sm pb-2">
              Essential cookies: These cookies are required to use Meta Products
              and are necessary for our sites to work as intended.
            </li>
            <li className="text-sm pb-2">
              Cookies from other companies: We use these cookies to show you ads
              off of Meta Products and to provide features like maps and videos
              on Meta Products. These cookies are optional.
            </li>
          </ul>
          <p className="text-sm pb-3 p-after">
            You have control over the optional cookies we use. Learn more about
            cookies and how we use them, and review or change your choices at
            any time in our Cookies Policy.
          </p>
          <section>
            <h3 className="">About cookies</h3>
            <div>
              <section>What are cookies?</section>
              <section>Why do we use cookies?</section>
              <section>What are Meta Products?</section>
              <section>Your cookie choices</section>
            </div>
          </section>
          <section>
            <h3>Cookies from other companies</h3>
            <p className="text-sm pb-3">
              We use cookies from other companies in order to show you ads off
              of our Products, and provide features like maps, payment services
              and video.
            </p>
            <Accordion
              items={[
                {
                  header: "How we use these Cookies",
                  content: (
                    <>
                      <p className="text-sm pb-3">
                        We use cookies from other companies on our Products:
                      </p>
                      <ul>
                        <li className="text-sm">
                          To show you ads about our Products and features on
                          other companies' apps and websites.
                        </li>
                        <li className="text-sm">
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
                      <ul>
                        <li className="text-sm">
                          Features you use on Meta Products will not be
                          affected.
                        </li>
                        <li className="text-sm">
                          We'll be able to better personalize ads for you off of
                          Meta Products, and measure their performance.
                        </li>
                        <li className="text-sm">
                          Other companies will receive information about you by
                          using their cookies.
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  header: "If you don't allow these cookies",
                  content: (
                    <>
                      <ul>
                        <li className="text-sm">
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
          <section>
            <h3>Other ways you can control your information</h3>
            <Accordion
              items={[
                {
                  header: "Manage your ad experience in Accounts center",
                  content: (
                    <>
                      <p className="text-sm pb-3">
                        You can manage your ad experience by visiting the
                        following settings.
                      </p>
                      <h4>Ad preferences</h4>
                      <p className=" text-sm">
                        In Ad preferences, you can choose whether we show you
                        ads and make choices about the information used to show
                        you ads.
                      </p>
                      <h4>Ad settings</h4>
                      <p className=" text-sm">
                        If we show you ads, we use data that advertisers and
                        other partners provide us with about your activity off
                        Meta Company Products, including websites and apps to
                        show you better ads. You can control whether we use this
                        data to show you ads in <a href="/">ad settings</a> .
                      </p>
                    </>
                  ),
                },
                {
                  header: "More information about online advertising",
                  content: (
                    <>
                      <p className=" text-sm">
                        Instagram adheres to the Self-Regulatory Principles for
                        Online Behavioral Advertising and participates in the
                        opt-out programs established by the{" "}
                        <a target="_blank" href="www.aboutads.info">
                          Digital Advertising Alliance
                        </a>
                        , the{" "}
                        <a target="_blank" href="https://youradchoices.ca">
                          Digital Advertising Alliance of Canada
                        </a>{" "}
                        and the{" "}
                        <a target="_blank" href="https://youronlinechoices.eu">
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
                      <p className=" text-sm">
                        Your browser or device may offer settings that allow you
                        to choose whether browser cookies are set and to delete
                        them. These controls vary by browser, and manufacturers
                        may change both the settings they make available and how
                        they work at any time. As of 5 October 2020, you may
                        find additional information about the controls offered
                        by popular browsers at the links below. Certain parts of
                        Facebook Products may not work properly if you have
                        disabled browser cookies. Please be aware that these
                        controls are distinct from the controls that Instagram
                        offers.
                      </p>
                      <ul>
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
        <div className="flex justify-center items-center h-20 allow-cookies-container">
          <button className="text-blue-500">Allow All Cookies</button>
        </div>
        <div className="flex justify-center items-center h-20 decline-cookies-container">
          <button>Decline Optional Cookies</button>
        </div>
      </div>
    </div>
  );
};

export default CookiesModal;
