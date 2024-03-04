import SelectLanguage from "./SelectLanguage";

const Footer = () => {
  return (
    <footer role="contentinfo" className="text-xs text-slate-400">
      <nav>
        <ul className="flex flex-wrap gap-x-4 list-none justify-center">
          <li>
            <a className="hover:underline" href="/">
              Meta
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              About
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              Blogs
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              Jobs
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              Help
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              Api
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              Privacy
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              Cookie Settings
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              Terms
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              Locations
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              Instagram lite
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              Threads
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              Contact Uploading & Non-Users
            </a>
          </li>
          <li>
            <a className="hover:underline" href="/">
              Meta Verified
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center gap-x-2 pt-4 pb-14">
        <SelectLanguage />
        <p>&copy; {new Date().getFullYear()} Instagram from Meta</p>
      </div>
    </footer>
  );
};

export default Footer;
