const Hero = () => {
  return (
    <section id="home" className="bg-[#020617] text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT */}
        <div className="flex-1">
          <p className="text-lg text-gray-400">Hello.</p>

          <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
            I’m Sabbir <br />
            <span className="text-orange-500">Software Developer</span>
          </h1>

          <div className="mt-6 flex gap-4">
            <button className="bg-orange-500 px-6 py-2 rounded">
              Got a project?
            </button>

            <button className="border border-gray-600 px-6 py-2 rounded">
              My resume
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center relative">

          {/* Glow Circle */}
          <div className="absolute w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-30"></div>

          <img
            src="/images/profile.jpeg"
            alt="profile"
            className="relative w-64 h-64 object-cover rounded-full border-4 border-orange-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;