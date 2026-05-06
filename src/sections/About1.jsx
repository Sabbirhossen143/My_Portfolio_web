const About = () => {
  return (
    <section className="bg-[#020617] text-white py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12">

        {/* LEFT TIMELINE */}
        <div className="flex-1 space-y-10 border-l border-gray-700 pl-6">

          <div>
            <h3 className="font-semibold">Website Development</h3>
          </div>

          <div>
            <h3 className="font-semibold">App Development</h3>
          </div>

          <div>
            <h3 className="font-semibold">Website Hosting</h3>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About me</h2>

          <p className="text-gray-400 mb-6">
            I started my software journey from photography. Through that,
            I learned to love the process of creating from scratch.
          </p>

          <div className="flex gap-10">
            <div>
              <h3 className="text-2xl font-bold text-orange-500">120+</h3>
              <p className="text-gray-400 text-sm">Completed Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">95%</h3>
              <p className="text-gray-400 text-sm">Client satisfaction</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">10+</h3>
              <p className="text-gray-400 text-sm">Years experience</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;