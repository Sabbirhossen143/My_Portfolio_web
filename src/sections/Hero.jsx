// Hero.jsx

import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowDown,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#020617] text-white relative overflow-hidden flex items-center">

      {/* LEFT SIDE SOCIAL ICONS */}
      <div className="hidden lg:flex flex-col gap-5 absolute left-6 top-1/2 -translate-y-1/2 z-20">

        <a
          href="/"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="/"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition"
        >
          <FaGithub />
        </a>

        <a
          href="/"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 transition"
        >
          <FaTwitter />
        </a>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 w-full">

        

        {/* HERO CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center pt-32">

          {/* LEFT */}
          <div>

            <p className="text-gray-400 mb-4">
              Hey, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold">
              Sabbir Hossen👋
            </h1>

            {/* TYPING TEXT */}
            <div className="text-2xl text-gray-300 mt-5 font-medium h-[40px]">

              <TypeAnimation
                sequence={[
                  "Web Designer",
                  1500,
                  "Problem Solver",
                  1500,
                  "Web Developer",
                  1500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />

            </div>

            {/* SMALL TEXT */}
            <div className="mt-6 text-gray-400 space-y-2">

              <p>
                ✨ Turning ideas into Stunning Websites 💻
              </p>

              <p>
                ✨ Available for projects and collaborations 🤝
              </p>

            </div>

            {/* BUTTON */}
            <button className="mt-8 bg-white/10 border border-white/10 backdrop-blur-md px-8 py-4 rounded-full hover:bg-cyan-500/20 transition flex items-center gap-3">

              Say Hello

              {/* BUTTON PNG PLACE */}
              <img
                src="/images/contact.png"
                alt=""
                className="w-8 h-8 sm:w-4 sm:h-4 object-contain
    brightness-0 invert"
              />

            </button>

            {/* SCROLL DOWN */}
            <div className="mt-12 flex items-center gap-3 text-gray-400">

              {/* SCROLL ICON PLACE */}
              <img
                src="/images/mouse.png"
                alt=""
                className="w-5 h-5 sm:w-4 sm:h-4 object-contain
    brightness-0 invert"
              />

              <span>
                Scroll Down
              </span>

              <FaArrowDown className="text-sm" />

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center relative">

            {/* ANIMATED BORDER */}
            <div className="absolute w-[340px] h-[340px] rounded-full border-2 border-cyan-400 animate-pulse"></div>

            {/* IMAGE CONTAINER */}
            <div className="relative w-[320px] h-[320px] rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden">

              {/* YOUR IMAGE */}
              <img
                src="/images/profile.jpeg"
                alt=""
                className="w-72 h-72 object-cover rounded-full"
              />

              {/* TOP CARD */}
              <div className="absolute top-4 right-0 bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3">

                <div className="flex items-center gap-3">

                  {/* BADGE ICON PLACE */}
                  <img
                    src="/images/problem.png"
                    alt=""
                    className="w-5 h-5"
                  />

                  <div>
                    <h3 className="font-bold">
                      120
                    </h3>

                    <p className="text-xs text-gray-400">
                      Problem Solving
                    </p>
                  </div>

                </div>
              </div>

              {/* LEFT CARD */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3">

                <div className="flex items-center gap-3">

                  <img
                    src="/images/experience.png"
                    alt=""
                    className="w-5 h-5"
                  />

                  <div>
                    <h3 className="font-bold">
                      3
                    </h3>

                    <p className="text-xs text-gray-400">
                      Year Experience
                    </p>
                  </div>

                </div>
              </div>

              {/* BOTTOM CARD */}
              <div className="absolute bottom-2 right-10 translate-y-1/2 bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3">

                <div className="flex items-center gap-3">

                  <img
                    src="/images/project.png"
                    alt=""
                    className="w-5 h-5"
                  />

                  <div>
                    <h3 className="font-bold">
                      150
                    </h3>

                    <p className="text-xs text-gray-400">
                      Finished Projects
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;