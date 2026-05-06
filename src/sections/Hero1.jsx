const Hero = () => {
  return (
    <section className="bg-[#020617] text-white pt-32 pb-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">

        {/* LEFT */}
        <div className="flex-1">
          <p className="text-lg text-gray-400">Hello<span className="text-orange-500">.</span></p>

          <h2 className="text-2xl mt-4 text-gray-300">
            I’m Jensen
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            Software Developer
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

        {/* RIGHT */}
        <div className="flex-1 flex justify-center relative mt-10 md:mt-0">

          {/* Circle glow */}
          <div className="absolute w-80 h-80 border-[40px] border-orange-500 rounded-full opacity-40"></div>

          <img
            src="/images/profile.jpeg"
            className="relative w-72"
            alt=""
          />

        </div>
      </div>
    </section>
  );
};

export default Hero;