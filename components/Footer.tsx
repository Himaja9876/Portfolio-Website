import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <section id="contact">
    <footer className="w-full pt-60 pb-40" id="contact pt-20">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        Looking for a <span className="text-purple">new addition to your team?</span> 
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Please feel free to contact me for any questions or to simply say hi.
        </p>
        <a href="mailto:hchinnam@binghamton.edu">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
